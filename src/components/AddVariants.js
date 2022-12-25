import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Dropdown from './Dropdown';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function AddVariants() {
  const dottedBorder =
    'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051__340.png';
  let initialList = [
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
  ];

  const [isUploadBtnClicked, setisUploadBtnClicked] = useState(false);
  const [imageList, setImageList] = useState(initialList);
  const [currIndex, setCurrIndex] = useState(0);

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

  function UploadBtnHandler() {
    setisUploadBtnClicked(true);
  }

  const TakePhotoHandler = async () => {
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

        response.assets.map(image => {
          for (let index = 0; index < imageList.length; index++) {
            if (imageList[index].uri === dottedBorder) {
              imageList[index].uri = image.uri;
              setCurrIndex(index);

              break;
            }
          }
        });

        setImageList(imageList);
        setisUploadBtnClicked(false);
      });
    }
  };

  const PhotoFromGalleryHandler = async type => {
    let options = {
      mediaType: type,
      selectionLimit: 6,

      quality: 1,
    };
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      launchImageLibrary(options, response => {
        console.log('Response = ', response);

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
        response.assets.map(image => {
          for (let index = 0; index < imageList.length; index++) {
            if (imageList[index].uri === dottedBorder) {
              imageList[index].uri = image.uri;
              setCurrIndex(index);

              break;
            }
          }

          setImageList(imageList);
          setisUploadBtnClicked(false);
        });
      });
    }
  };
  function CancelHandler() {
    setisUploadBtnClicked(false);
  }
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Variant Type</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <Dropdown title={'Select '} />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Price For Variant</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <Dropdown title={'Price'} />
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Size</Text>
          <Text style={styles.imp}>*</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Dropdown title={'Select One'} style={{width: wp * 0.55}} />
          <Dropdown title={'Regular'} style={{width: wp * 0.35}} />
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Color</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <Dropdown title={'Select Color'} />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={UploadBtnHandler}>
        <View style={styles.btn}>
          <Text
            style={{color: 'white', fontWeight: 'bold', fontSize: wp * 0.04}}>
            Upload Photos/Videos
          </Text>
        </View>
      </TouchableOpacity>
      {isUploadBtnClicked ? (
        <View style={styles.optionContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.optionBtn}
            onPress={() => {
              TakePhotoHandler();
            }}>
            <View>
              <Text style={[styles.text, {marginTop: 0, color: '#7465B6'}]}>
                Take Photo
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.optionBtn}
            onPress={() => PhotoFromGalleryHandler('photo')}>
            <View>
              <Text style={[styles.text, {marginTop: 0, color: '#7465B6'}]}>
                Choose From Gallery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.optionBtn}
            onPress={CancelHandler}>
            <View>
              <Text style={[styles.text, {marginTop: 0, color: '#7465B6'}]}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <FlatList
          data={imageList}
          renderItem={({item, index}) => {
            // return console.log(item.fileName);
            const isCurrent = index === currIndex;
            return (
              <TouchableOpacity
                onPress={() => setCurrIndex(index)}
                key={item.fileName}
                style={[
                  styles.smallBox,
                  isCurrent
                    ? {
                        borderWidth: 4,
                        borderStyle: 'solid',
                        borderColor: '#3F2B96',
                      }
                    : null,
                ]}>
                <Image
                  source={{
                    uri: item.uri,
                  }}
                  resizeMode="cover"
                  style={[
                    {
                      height: hp * 0.055,
                      width: hp * 0.055,
                      borderRadius: wp * 0.01,

                      alignSelf: 'center',
                    },
                    isCurrent ? {height: hp * 0.052, width: hp * 0.052} : null,
                  ]}
                />
              </TouchableOpacity>
            );
          }}
          horizontal
        />
      </View>
      <TouchableOpacity
        style={{
          width: wp * 0.8,
          borderWidth: 1,
          borderColor: '#7465B6',
          borderStyle: 'dashed',
          alignSelf: 'center',
          marginTop: wp * 0.04,
          padding: wp * 0.015,
        }}>
        <Text
          style={[
            styles.text,
            {
              color: '#7465B6',
              fontSize: wp * 0.035,
              fontWeight: '600',
              alignSelf: 'center',
              marginTop: 0,
            },
          ]}>
          + ADD A NEW VARIANT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sub: {
    fontSize: wp * 0.033,
    color: '#000000',

    fontWeight: 'bold',
  },
  imp: {
    color: 'red',

    fontWeight: 'bold',
  },
  smallBox: {
    height: hp * 0.056,
    width: hp * 0.056,
    marginTop: hp * 0.02,
    borderRadius: wp * 0.01,
    marginHorizontal: wp * 0.02,
    borderStyle: 'dashed',
    justifyContent: 'center',
    borderColor: '#929292',
    borderWidth: 1,
  },
  btn: {
    height: hp * 0.045,
    alignItems: 'center',
    width: '84%',
    alignSelf: 'center',
    marginTop: '4%',

    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#7465B6',
    borderwidth: 2,
    borderRadius: wp * 0.02,
    fontSize: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: wp * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: '6%',
  },
  optionContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    elevation: 6,
  },
  optionBtn: {
    height: hp * 0.072,
    width: wp * 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: wp * 0.02,
    elevation: 4,
    marginBottom: wp * 0.001,
    backgroundColor: 'white',
    // borderTopWidth: 0.5,
    // borderColor: '#7465B6',
  },
});
