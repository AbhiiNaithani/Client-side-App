import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';

import OrderedProductInfo from './OrderedProductInfo';

const wp = Dimensions.get('window').width;

function OrderInfoCard({item}) {
  // console.log(item.buyerInfo.name);
  return (
    <View style={styles.card}>
      <View style={{flex: 4}}>
        <FlatList
          data={item.items}
          key={item.orderNo}
          renderItem={({item}) => <OrderedProductInfo item={item} />}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Name:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.name}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Address:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.address}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Landmark:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.landmark}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Postal Code:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.postalCode}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          City:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.city}
          </Text>
        </Text>
      </View>
    </View>
  );
}
export default OrderInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  text: {
    color: 'black',
    fontSize: wp * 0.035,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
