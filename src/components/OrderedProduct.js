import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const wp = Dimensions.get('window').width;

export default function OrderedProduct({item}) {
  console.log(item.price);
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, marginRight: wp * 0.1}}>
        <Image
          style={styles.Img}
          resizeMode="contain"
          source={{uri: item.productImage}}
        />
      </View>
      <View style={{flex: 2}}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              fontSize: wp * 0.038,
              marginBottom: 0,
              marginTop: wp * 0.02,
            },
          ]}>
          {item.brand}
        </Text>
        <Text style={[styles.text, {fontWeight: 'bold', fontSize: wp * 0.035}]}>
          {item.name}
        </Text>
        <Text style={[styles.text]}>
          Order ID:{' '}
          <Text style={[styles.text, {fontWeight: '400'}]}>234567</Text>
        </Text>
        <Text style={[styles.text]}>
          Product ID:{' '}
          <Text style={[styles.text, {fontWeight: '400'}]}>234567</Text>
        </Text>
        <Text style={[styles.text]}>
          Quantity: <Text style={[styles.text, {fontWeight: '400'}]}>2</Text>
        </Text>
        <Text style={[styles.text]}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    color: 'black',
    fontSize: wp * 0.03,
    marginBottom: wp * 0.025,
  },
  Img: {
    backgroundColor: 'white',
    width: 0.35 * wp,
    height: 0.35 * wp,
  },
});
