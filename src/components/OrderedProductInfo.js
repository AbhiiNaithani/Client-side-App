import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wp = Dimensions.get('window').width;

export default function OrderedProductInfo({item}) {
  const [isSelected, setIsSelected] = useState(false);

  function selectionHandler() {
    setIsSelected(!isSelected);
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={selectionHandler} style={styles.selectionBar}>
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
          flex: 3,
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.Img}
            resizeMode="contain"
            source={{uri: item.productImage}}
          />
          <Text style={styles.text}>
            {' '}
            Quantity:{'  '}
            <Text
              style={[
                styles.text,
                {
                  fontWeight: '400',
                  fontSize: wp * 0.03,
                },
              ]}>
              {item.quantity}
            </Text>
          </Text>
        </View>
        <Text style={styles.text}>{item.brand}</Text>
        <Text style={[styles.text, {fontWeight: '400', fontSize: wp * 0.03}]}>
          {item.name}
        </Text>
        <Text style={[styles.text, {marginBottom: wp * 0.018}]}>
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
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, alignSelf: 'center'}]}>
          {' '}
          Rs. {item.price}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionBar: {
    position: 'absolute',
    // backgroundColor: 'white',

    left: wp * 0.01,
    zIndex: 100,
  },
  text: {
    color: 'black',
    fontSize: wp * 0.035,
    marginLeft: wp * 0.02,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  Img: {
    marginTop: wp * 0.02,
    backgroundColor: 'white',
    width: 0.18 * wp,
    height: 0.18 * wp,
  },
});
