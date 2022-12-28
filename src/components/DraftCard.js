import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function DraftCard({item}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Alert box

  // let DeleteAlert = () => {
  //   setIsClicked(false);
  //   Alert.alert(
  //     'DELETE',
  //     "Are you sure you want to delete this product? You won't be able to recover it.",
  //     [
  //       {
  //         text: 'No',
  //         onPress: () => {
  //           console.log('Do nothing because we cancelled');
  //         },
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => {
  //           console.log('Product is deleted.');
  //         },
  //       },
  //     ],
  //   );
  // };

  function selectionHandler() {
    setIsSelected(!isSelected);
  }
  function OptionsHandler() {
    setIsClicked(true);
  }

  function DeleteHandler() {
    setIsModalVisible(true);
    setIsClicked(false);
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={selectionHandler} style={styles.checkBox}>
        {
          <Icon
            // style={
            //   !isSelected
            //     ? {backgroundColor: 'white'}
            //     : {backgroundColorP: null}
            // }
            name={isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={isSelected ? '#3F2B96' : '#3F2B96'}
          />
        }
      </TouchableOpacity>
      <View
        style={{
          width: wp * 0.5,
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.Img}
            resizeMode="contain"
            source={{uri: item.productImage}}
          />
          <Text style={[styles.text, {marginTop: wp * 0.05}]}>
            SKU ID: {'  '}
            <Text
              style={[
                styles.text,
                {
                  fontWeight: '400',
                  fontSize: wp * 0.03,
                },
              ]}>
              {item.SkuId}
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{item.brand}</Text>
          <View style={{width: wp * 0.4}}>
            <Text
              style={[styles.text, {fontWeight: '400', fontSize: wp * 0.03}]}>
              {item.name}
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.text,
            {fontWeight: '400', fontSize: wp * 0.03, marginBottom: wp * 0.01},
          ]}>
          {item.genre}
        </Text>
      </View>

      <View
        style={{
          width: wp * 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, fontWeight: '400'}]}>
          {item.createdOn}
        </Text>
      </View>
      <View
        style={{
          width: wp * 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, fontWeight: '400'}]}>
          {item.modifiedOn}
        </Text>
      </View>
      <View
        style={{
          width: wp * 0.07,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={OptionsHandler}>
          <Icon name="dots-vertical" size={wp * 0.06} color="#9747FF" />
        </TouchableOpacity>
        {isClicked ? (
          <View
            style={{
              position: 'absolute',
              right: wp * 0.036,
              top: hp * 0.05,
              height: hp * 0.07,
              width: wp * 0.2,
              backgroundColor: '#D0C7F6',

              alignItems: 'center',
              zIndex: 100,
            }}>
            <Text
              onPress={() => setIsClicked(false)}
              style={[styles.text, {marginTop: hp * 0.01}]}>
              Edit
            </Text>
            <Text
              onPress={DeleteHandler}
              style={[styles.text, {marginTop: hp * 0.01}]}>
              Delete
            </Text>
          </View>
        ) : null}
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => setIsModalVisible(false)}>
          <TouchableOpacity
            disabled={true}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                padding: wp * 0.04,
                // height: hp * 0.2,
                width: wp * 0.85,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#7465B6',
                borderRadius: wp * 0.02,
                elevation: 4,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="delete" size={wp * 0.05} color="#F24E1E" />
                <Text style={[styles.text, {fontSize: wp * 0.04}]}>DELETE</Text>
              </View>
              <Text
                style={[
                  styles.text,
                  {fontWeight: '600', marginVertical: hp * 0.015},
                ]}>
                Are you sure you want to delete this product? You won't be able
                to recover it.
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text
                  onPress={() => setIsModalVisible(false)}
                  style={[
                    styles.text,
                    {
                      color: '#7465B6',
                      marginRight: wp * 0.12,
                      fontSize: wp * 0.035,
                    },
                  ]}>
                  No
                </Text>
                <Text
                  onPress={() => setIsModalVisible(false)}
                  style={[
                    styles.text,
                    {
                      color: '#7465B6',
                      marginRight: wp * 0.12,
                      fontSize: wp * 0.035,
                    },
                  ]}>
                  Yes
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    position: 'absolute',
    // backgroundColor: 'white',

    left: wp * 0.01,
    zIndex: 100,
  },
  card: {
    borderWidth: wp * 0.005,
    borderColor: '#7465B6',
    marginHorizontal: wp * 0.01,
    flexDirection: 'row',
    marginBottom: wp * 0.01,
  },
  Img: {
    marginTop: wp * 0.02,
    backgroundColor: 'white',
    width: 0.1 * wp,
    height: 0.1 * wp,
  },
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
