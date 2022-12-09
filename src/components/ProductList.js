import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native';
import ProductCard from './ProductCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
const StaticProductImage =
  'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg';

const products = [
  {
    id: 1,
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    star: 4.5,
    rating: 1100,
  },
  {
    id: 2,
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    star: 4.5,
    rating: 1100,
  },
  {
    id: 3,
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    star: 4.5,
    rating: 1100,
  },
  {
    id: 4,
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    star: 4.5,
    rating: 1100,
  },
  {
    id: 5,
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 2999,
    Discount: 50,
    productImage: StaticProductImage,
    star: 4.5,
    rating: 1100,
  },
];

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function ProductList() {
  const [text, setText] = useState('');

  function searchHandler(newText) {
    setText(newText);
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            marginVertical: wp * 0.05,
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            alignSelf: 'center',
            flexDirection: 'row',
            borderRadius: wp * 0.02,
            borderWidth: 1,
            borderColor: '#DADADA',
            backgroundColor: 'white',
          }}>
          <Icon name="search" size={16} color="#DADADA" />
          <TextInput
            placeholder="Search for product"
            placeholderTextColor={'#DADADA'}
            style={{
              height: wp * 0.1,
              width: '85%',
              color: 'black',
            }}
            onChangeText={searchHandler}
            value={text}
          />
        </View>
        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductCard item={item} />}></FlatList>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, right: wp * 0.425}}>
        <TouchableOpacity>
          <Icon name="add-box" size={wp * 0.15} color="#7465B6" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default ProductList;
