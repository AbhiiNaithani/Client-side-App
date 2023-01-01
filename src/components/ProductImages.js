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
import React, {useState} from 'react';
import UploadOptions from './UploadOptions';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function ProductImages() {
  const dottedBorder =
    'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051__340.png';
  let productInitialList = [
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
  ];
  let lableInitialList = [
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
  ];
  let highlightImgList = [
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
    {uri: dottedBorder},
  ];

  const [isProdUploadBtnClicked, setIsProdUploadBtnClicked] = useState(false);
  const [isLabUploadBtnClicked, setIsLabUploadBtnClicked] = useState(false);
  const [productImageList, setProductImageList] = useState(productInitialList);
  const [lableImageList, setLableImageList] = useState(lableInitialList);
  const [currUrl, setCurrUrl] = useState(dottedBorder);

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

  function ProdUploadBtnHandler() {
    setIsProdUploadBtnClicked(true);
  }

  function LabUploadBtnHandler() {
    setIsLabUploadBtnClicked(true);
  }

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

        response.assets.map(image => {
          if (location === 'product') {
            for (let index = 0; index < productImageList.length; index++) {
              if (productImageList[index].uri === dottedBorder) {
                productImageList[index].uri = image.uri;
                setCurrUrl(image.uri);

                break;
              }
            }

            setProductImageList(productImageList);
            setIsProdUploadBtnClicked(false);
          } else if (location === 'lable') {
            for (let index = 0; index < lableImageList.length; index++) {
              if (lableImageList[index].uri === dottedBorder) {
                lableImageList[index].uri = image.uri;
                setCurrUrl(image.uri);

                break;
              }
            }

            setLableImageList(lableImageList);
            setIsLabUploadBtnClicked(false);
          }
        });
      });
    }
  };

  const PhotoFromGalleryHandler = async location => {
    let options = {
      mediaType: 'mixed',
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
          if (location === 'product') {
            for (let index = 0; index < productImageList.length; index++) {
              if (productImageList[index].uri === dottedBorder) {
                productImageList[index].uri = image.uri;
                setCurrUrl(image.uri);

                break;
              }
            }

            setProductImageList(productImageList);
            setIsProdUploadBtnClicked(false);
          } else if (location === 'lable') {
            for (let index = 0; index < lableImageList.length; index++) {
              if (lableImageList[index].uri === dottedBorder) {
                lableImageList[index].uri = image.uri;
                setCurrUrl(image.uri);

                break;
              }
            }

            setLableImageList(lableImageList);
            setIsLabUploadBtnClicked(false);
          }
        });
      });
    }
  };
  function CancelHandler() {
    setIsProdUploadBtnClicked(false);
    setIsLabUploadBtnClicked(false);
  }
  return (
    <ScrollView>
      <View
        style={{flex: 1, backgroundColor: 'white', paddingBottom: hp * 0.1}}>
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
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp * 0.05,
            alignItems: 'center',
          }}>
          <FlatList
            data={highlightImgList}
            numColumns={2}
            renderItem={({item, index}) => {
              // return console.log(item.fileName);

              return (
                <TouchableOpacity key={index} style={[styles.smallBox]}>
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
                    ]}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.Box}>
            <Image
              source={{uri: currUrl}}
              resizeMode="center"
              style={styles.BoxImg}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={ProdUploadBtnHandler}>
          <View style={styles.btn}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: wp * 0.04}}>
              Upload Photos/Videos
            </Text>
          </View>
        </TouchableOpacity>
        {isProdUploadBtnClicked ? (
          <UploadOptions
            visibility={true}
            Cancel={CancelHandler}
            Camera={TakePhotoHandler}
            Gallery={PhotoFromGalleryHandler}
            location={'product'}
          />
        ) : null}

        <View
          style={{
            paddingHorizontal: wp * 0.03,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <FlatList
            data={productImageList}
            renderItem={({item, index}) => {
              // return console.log(item.fileName);
              const isCurrent = item.uri === currUrl;
              return (
                <TouchableOpacity
                  onPress={() => setCurrUrl(item.uri)}
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
            <Text style={styles.sub}>Product Brand</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            Your Brand Name If You Want to add.
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={LabUploadBtnHandler}>
            <View style={styles.btn}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: wp * 0.04,
                }}>
                Upload Brand Lable
              </Text>
            </View>
          </TouchableOpacity>
          {isLabUploadBtnClicked ? (
            <UploadOptions
              visibility={true}
              Cancel={CancelHandler}
              Camera={TakePhotoHandler}
              Gallery={PhotoFromGalleryHandler}
              location={'lable'}
            />
          ) : null}

          <View
            style={{
              paddingHorizontal: 0,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FlatList
              data={lableImageList}
              renderItem={({item, index}) => {
                // return console.log(item.fileName);
                const isCurrent = item.uri === currUrl;
                return (
                  <TouchableOpacity
                    onPress={() => setCurrUrl(item.uri)}
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
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Product Title</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>Name of the product.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Product Description</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            You can tell something about the product here.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>MRP</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            Maximum Retail Price of the product.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Your Selling Price</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.instructionText}>
            Price at which you want to sell the product.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Box: {
    height: hp * 0.2,
    width: wp * 0.55,
    marginTop: wp * 0.02,
    borderRadius: wp * 0.01,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#929292',
    borderWidth: 1,
    alignSelf: 'center',
  },
  BoxImg: {
    height: hp * 0.19,
    width: wp * 0.54,
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
    width: wp * 0.84,
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
    height: hp * 0.055,
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
    // position: 'absolute',
    backgroundColor: 'white',
    marginTop: wp * 0.01,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: wp * 0.02,
    alignItems: 'center',
    // zIndex: 100,
    // elevation: 6,
  },
  optionBtn: {
    height: hp * 0.072,
    width: wp * 0.82,
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
