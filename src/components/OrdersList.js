import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import OrderCard from './OrderCard';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const products = [
  {
    orderNo: 1000101,
    items: [
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
  },
  {
    orderNo: 1000122,
    items: [
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
  },
  {
    orderNo: 1000134,
    items: [
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
  },
];

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function OrdersList() {
  const [allSelected, setAllSelected] = useState(false);

  function allSelectionHandler() {
    setAllSelected(!allSelected);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.selectionBar}>
          <TouchableOpacity onPress={allSelectionHandler}>
            {
              <Icon
                name={
                  allSelected ? 'checkbox-marked' : 'checkbox-blank-outline'
                }
                size={24}
                color={allSelected ? '#3F2B96' : '#3F2B96'}
              />
            }
          </TouchableOpacity>
          <Text style={styles.text}> Select All</Text>
          <Text
            style={[styles.text, {fontSize: wp * 0.035, fontWeight: 'bold'}]}>
            ({products.length})
          </Text>
        </View>
        <FlatList
          numColumns={1}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <OrderCard item={item} />}></FlatList>
        <View style={{paddingBottom: '20%'}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default OrdersList;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },
  selectionBar: {
    height: wp * 0.12,
    alignItems: 'center',
    width: '100%',
    padding: wp * 0.025,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 6,
    marginBottom: wp * 0.01,
  },
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
});
