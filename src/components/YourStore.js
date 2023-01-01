import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Logo from 'react-native-vector-icons/MaterialCommunityIcons';
import Edit from './Edit';
import UploadOptions from './UploadOptions';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function YourStore() {
  const dottedBorder =
    'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051__340.png';

  const [coverImg, setCoverImg] = useState(dottedBorder);
  const [profileImg, setProfileImg] = useState(dottedBorder);
  const [name, setName] = useState('TYLER');
  const [fbAccount, setFbAccount] = useState('Facebook Account');
  const [igAccount, setIgAccount] = useState('Instagram Account');
  const [ytAccount, setYtaccount] = useState('Youtube Account');
  const [isNameModalVisible, setIsNameModalVisible] = useState(false);
  const [isFbModalVisible, setIsFbModalVisible] = useState(false);
  const [isIgModalVisible, setIsIgModalVisible] = useState(false);
  const [isYtModalVisible, setIsYtModalVisible] = useState(false);
  const [isCoverClicked, setIsCoverClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // if WRITE_EXTERNAL_STORAGE permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const TakePhotoHandler = async location => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    const isCameraPermitted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (isCameraPermitted === PermissionsAndroid.RESULTS.GRANTED) {
      launchCamera(options, response => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.error) {
          alert('ImagePicker error: ', response.error);
          return;
        } else if (response.customButton) {
          alert('User tapped custom button: ', response.customButton);
          return;
        }

        if (location === 'cover') {
          setCoverImg(response.assets[0].uri);
          setIsCoverClicked(false);
        } else if (location === 'profile') {
          setProfileImg(response.assets[0].uri);
          setIsProfileClicked(false);
        }
      });
    }
  };

  const PhotoFromGalleryHandler = async location => {
    let options = {
      mediaType: 'photo',
      selectionLimit: 1,

      quality: 1,
    };
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      launchImageLibrary(options, response => {
        console.log('Response = ', response.assets[0].uri);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }

        if (location === 'cover') {
          setCoverImg(response.assets[0].uri);
          setIsCoverClicked(false);
        } else if (location === 'profile') {
          setProfileImg(response.assets[0].uri);
          setIsProfileClicked(false);
        }
      });
    }
  };
  function CoverHandler() {
    setIsCoverClicked(true);
  }

  function ProfileHandler() {
    setIsProfileClicked(true);
  }

  function CancelHandler() {
    setIsCoverClicked(false);
    setIsProfileClicked(false);
  }

  function NameModalHandler() {
    setIsNameModalVisible(!isNameModalVisible);
  }

  function NameHandler(text) {
    setName(text);
  }

  function FbModalHandler() {
    setIsFbModalVisible(!isFbModalVisible);
  }

  function FbHandler(text) {
    setFbAccount(text);
  }

  function IgModalHandler() {
    setIsIgModalVisible(!isIgModalVisible);
  }

  function IgHandler(text) {
    setIgAccount(text);
  }

  function YtModalHandler() {
    setIsYtModalVisible(!isYtModalVisible);
  }

  function YtHandler(text) {
    setYtaccount(text);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="arrow-left" color={'white'} size={wp * 0.03} />
          <Text style={styles.text}>Your Store</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{uri: coverImg}}
          resizeMode="cover"
          style={styles.coverImg}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={CoverHandler}
          style={styles.coverEdit}>
          <Icon name={'pencil'} size={wp * 0.04} color={'white'} />
          <Text
            style={[
              styles.text,
              {
                textAlign: 'center',
                fontSize: wp * 0.035,
                marginBottom: wp * 0.005,
              },
            ]}>
            EDIT
          </Text>
        </TouchableOpacity>
        {isCoverClicked ? (
          <UploadOptions
            visibility={true}
            Cancel={CancelHandler}
            Camera={TakePhotoHandler}
            Gallery={PhotoFromGalleryHandler}
            location={'cover'}
          />
        ) : null}
      </View>
      <View style={{paddingVertical: hp * 0.02}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: wp * 0.35,
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={styles.profileImg}
                resizeMode="cover"
                source={{uri: profileImg}}
              />
            </View>
            <TouchableOpacity
              onPress={ProfileHandler}
              activeOpacity={0.8}
              style={styles.profileEdit}>
              <Icon name={'pencil'} size={wp * 0.035} color={'#7465B6'} />
              <Text
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    textAlign: 'center',
                    fontSize: wp * 0.03,
                    marginBottom: wp * 0.005,
                  },
                ]}>
                EDIT
              </Text>
            </TouchableOpacity>
            {isProfileClicked ? (
              <UploadOptions
                visibility={true}
                Cancel={CancelHandler}
                Camera={TakePhotoHandler}
                Gallery={PhotoFromGalleryHandler}
                location={'profile'}
              />
            ) : null}
          </View>
          <View
            style={{
              width: wp * 0.65,
              alignItems: 'flex-start',
              paddingHorizontal: wp * 0.035,
              paddingVertical: wp * 0.02,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: wp * 0.025,
              }}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    fontSize: wp * 0.04,
                  },
                ]}>
                {name}
              </Text>
              <TouchableOpacity onPress={NameModalHandler}>
                <Icon name="pencil" size={wp * 0.04} color="#7465B6" />
              </TouchableOpacity>
              {isNameModalVisible ? (
                <Edit
                  visibility={true}
                  title={'Name'}
                  ModalHandler={NameModalHandler}
                  Handler={NameHandler}
                />
              ) : null}
            </View>
            <Text style={[styles.text, {color: 'black', fontSize: wp * 0.05}]}>
              {' '}
              1.2M{' '}
              <Text
                style={[styles.text, {color: 'black', fontSize: wp * 0.04}]}>
                Followers
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: wp * 0.075,
            paddingVertical: hp * 0.03,
            width: wp * 0.68,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: hp * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Logo name="facebook" size={wp * 0.05} color="#1877F2" />
              <Text
                style={[
                  styles.text,
                  {
                    color: 'black',
                    marginLeft: wp * 0.04,
                    fontSize: wp * 0.03,
                  },
                ]}>
                {fbAccount}
              </Text>
            </View>
            <TouchableOpacity onPress={FbModalHandler}>
              <Icon name="pencil" size={wp * 0.04} color="#7465B6" />
            </TouchableOpacity>
            {isFbModalVisible ? (
              <Edit
                visibility={true}
                title={'Facebook Account'}
                ModalHandler={FbModalHandler}
                Handler={FbHandler}
              />
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: hp * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Logo name="instagram" size={wp * 0.05} color="#D867DA" />
              <Text
                style={[
                  styles.text,
                  {
                    color: 'black',
                    marginLeft: wp * 0.04,
                    fontSize: wp * 0.03,
                  },
                ]}>
                {igAccount}
              </Text>
            </View>
            <TouchableOpacity onPress={IgModalHandler}>
              <Icon name="pencil" size={wp * 0.04} color="#7465B6" />
            </TouchableOpacity>
            {isIgModalVisible ? (
              <Edit
                visibility={true}
                title={'Instagram Account'}
                ModalHandler={IgModalHandler}
                Handler={IgHandler}
              />
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: hp * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Logo name="youtube" size={wp * 0.05} color="#FF0302" />
              <Text
                style={[
                  styles.text,
                  {
                    color: 'black',
                    marginLeft: wp * 0.04,
                    fontSize: wp * 0.03,
                  },
                ]}>
                {ytAccount}
              </Text>
            </View>
            <TouchableOpacity onPress={YtModalHandler}>
              <Icon name="pencil" size={wp * 0.04} color="#7465B6" />
            </TouchableOpacity>
            {isYtModalVisible ? (
              <Edit
                visibility={true}
                title={'Youtube Handler'}
                ModalHandler={YtModalHandler}
                Handler={YtHandler}
              />
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: hp * 0.02,
            }}>
            <Logo name="tag" size={wp * 0.07} color="#0FA958" />
            <Text
              style={[
                styles.text,
                {
                  color: 'black',
                  marginLeft: wp * 0.04,
                  fontSize: wp * 0.05,
                },
              ]}>
              50K{' '}
              <Text style={[styles.text, {color: 'black'}]}>Products Sold</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp * 0.01,
            }}>
            <View style={styles.progressCircle}>
              <Text
                style={[styles.text, {color: 'black', fontSize: wp * 0.032}]}>
                4.5
              </Text>
            </View>
            <Text
              style={[styles.text, {color: 'black', marginLeft: wp * 0.04}]}>
              Ratings
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F2B96',
    height: hp * 0.065,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp * 0.04,
  },
  text: {
    marginHorizontal: wp * 0.02,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: wp * 0.038,
  },
  coverImg: {
    width: wp * 1,
    height: hp * 0.24,
  },
  coverEdit: {
    position: 'absolute',
    bottom: hp * 0.01,
    right: wp * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: wp * 0.25,
    padding: wp * 0.01,
    borderRadius: wp * 0.04,
  },
  profileImg: {
    width: wp * 0.2,
    height: wp * 0.2,
    borderRadius: wp * 0.1,
    borderWidth: 2,
    borderColor: '#7465B6',
  },
  profileEdit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp * 0.18,
    padding: wp * 0.005,
    borderRadius: wp * 0.04,
    borderColor: '#7465B6',
    borderWidth: 1,
    marginTop: wp * 0.015,
  },
  progressCircle: {
    width: wp * 0.12,
    height: wp * 0.12,
    borderWidth: wp * 0.015,
    borderRadius: wp * 0.06,
    borderColor: '#19A939',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
