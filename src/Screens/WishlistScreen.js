import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import WishlistItem from '../components/WhishlistItem';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

const StaticProductImage =
  'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg';

const products = [
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: 4,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: 4.5,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: 3.8,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: 4,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 2999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: 4.7,
  },
];

export default function WishlistScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Icon name="heart" color={'white'} size={wp * 0.05} />
        <Text style={styles.text}>Your Wishlist</Text>
      </View>
      <ScrollView>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <WishlistItem product={item} />}></FlatList>
        <View style={{paddingBottom: 220}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F2B96',
    height: hp * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: wp * 0.02,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: wp * 0.038,
  },
});
