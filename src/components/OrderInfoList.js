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
  Alert,
} from 'react-native';
import OrderCard from './OrderCard';
import OrderInfoCard from './OrderInfoCard';

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
        quantity: 10,
        SkuId: 12132232323,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
    buyerInfo: {
      name: 'Ajeet Pratap Pandey',
      address: '70/18 A, B-1 Extension, D-Block, Sewak Park, Dwarka, Delhi',
      landmark: 'Gurudwara',
      postalCode: 110059,
      city: 'Delhi',
    },
  },
  {
    orderNo: 1000122,
    items: [
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        quantity: 10,
        SkuId: 12132232323,
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
        quantity: 10,
        SkuId: 12132232323,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
    buyerInfo: {
      name: 'Ajeet Pratap Pandey',
      address: '70/18 A, B-1 Extension, D-Block, Sewak Park, Dwarka, Delhi',
      landmark: 'Gurudwara',
      postalCode: 110059,
      city: 'Delhi',
    },
  },
  {
    orderNo: 1000134,
    items: [
      {
        brand: 'bOAt',
        type: 'Headphones',
        name: 'Wireless Over Ear headphones',
        price: 999,
        quantity: 10,
        SkuId: 12132232323,
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
        quantity: 10,
        SkuId: 12132232323,
        originalPrice: 1999,
        Discount: 50,
        productImage:
          'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
      },
    ],
    buyerInfo: {
      name: 'Ajeet Pratap Pandey',
      address: '70/18 A, B-1 Extension, D-Block, Sewak Park, Dwarka, Delhi',
      landmark: 'Gurudwara',
      postalCode: 110059,
      city: 'Delhi',
    },
  },
];

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function OrderInfoList() {
  const [allSelected, setAllSelected] = useState(false);

  function allSelectionHandler() {
    setAllSelected(!allSelected);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.selectionBar}>
          <TouchableOpacity
            onPress={allSelectionHandler}
            style={{position: 'absolute', left: wp * 0.015}}>
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
          <View
            style={{
              flex: 2.8,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={styles.text}> Product Information</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.text}> Price</Text>
          </View>
          <View
            style={{
              flex: 2,
            }}>
            <Text style={styles.text}> Buyer Information</Text>
          </View>
        </View>
        <FlatList
          numColumns={1}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <OrderInfoCard item={item} />
            </View>
          )}></FlatList>
        <View style={{paddingBottom: '20%'}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default OrderInfoList;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },
  card: {
    borderWidth: wp * 0.005,
    borderColor: '#7465B6',
    marginHorizontal: wp * 0.01,
    marginTop: wp * 0.015,
  },
  selectionBar: {
    height: wp * 0.11,
    alignItems: 'center',
    // width: '100%',
    padding: wp * 0.025,
    backgroundColor: '#D0C7F6',
    marginHorizontal: wp * 0.01,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    alignSelf: 'center',
  },
});
