import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function ProductImages() {
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
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text
          style={[
            styles.text,
            {
              fontSize: wp * 0.025,
              color: '#7465B6',
              marginLeft: 0,
              marginTop: wp * 0.015,
              textAlign: 'right',
              marginRight: wp * 0.03,
            },
          ]}
          onPress={() => console.log('Pressed')}>
          View Guidelines
        </Text>
        <View style={styles.Box}>
          <Image
            style={[styles.BoxImg]}
            source={{
              uri: imageList[currIndex].uri,
            }}
            resizeMode="contain"
          />
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
            paddingHorizontal: wp * 0.03,
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
                      isCurrent
                        ? {height: hp * 0.052, width: hp * 0.052}
                        : null,
                    ]}
                  />
                </TouchableOpacity>
              );
            }}
            horizontal
          />
        </View>
        <View style={{marginHorizontal: '5%'}}>
          <Text style={styles.text}>Products Details</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Seller SKU ID</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            Unique identifier for the product.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Style Code</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            Style Code remains same for all sizes or variants of this product.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Product Title</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>Name of the product.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Box: {
    height: hp * 0.22,
    width: '90%',
    marginTop: '1%',
    borderRadius: wp * 0.01,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#929292',
    borderWidth: 1,
    alignSelf: 'center',
  },
  BoxImg: {
    height: hp * 0.2,
    width: '90%',
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
    height: hp * 0.05,
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
  Input: {
    height: '12%',
    borderWidth: 1,
    width: '100%',

    fontSize: wp * 0.04,
    fontWeight: 'italic',
    borderRadius: wp * 0.01,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderColor: '#DADADA',
  },
  text: {
    fontSize: wp * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: '6%',
  },
  sub: {
    fontSize: wp * 0.035,
    color: '#000000',
    marginTop: '2%',
    fontWeight: 'bold',
  },
  imp: {
    color: 'red',
    marginTop: '2%',
    fontWeight: 'bold',
  },
  instructionText: {
    color: '#DADADA',
    fontSize: wp * 0.025,
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
