import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function RequestCard({item}) {
  const status = item.status;
  let color = 'red';
  if (status === 'Pending') {
    color = '#F4DD0A';
  } else {
    color = '#2FB84D';
  }

  const [isSelected, setIsSelected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function selectionHandler() {
    setIsSelected(!isSelected);
  }
  function OptionsHandler() {
    setIsClicked(true);
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
          width: wp * 0.44,
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
          width: wp * 0.14,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, color: '#7465B6'}]}>
          {item.type}
        </Text>
      </View>
      <View
        style={{
          width: wp * 0.16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, color: color}]}>
          {item.status}
        </Text>
      </View>
      <View
        style={{
          width: wp * 0.17,
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
          width: wp * 0.05,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.8} onPress={OptionsHandler}>
          <Icon name="dots-vertical" size={wp * 0.06} color="#9747FF" />
        </TouchableOpacity>
        {isClicked ? (
          <View
            style={{
              position: 'absolute',
              right: wp * 0.036,
              top: hp * 0.06,
              height: hp * 0.06,
              width: wp * 0.2,
              backgroundColor: '#D0C7F6',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 100,
            }}>
            <Text onPress={() => setIsClicked(false)} style={[styles.text]}>
              See Report
            </Text>
          </View>
        ) : null}
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
