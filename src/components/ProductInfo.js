import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wp = Dimensions.get('window').width;

const products = [
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    SkuId: 12345678,
    stock: 10000,
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: 'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    SkuId: 12345678,
    stock: 10000,
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: 'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    SkuId: 12345678,
    stock: 10000,
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: 'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
  },
];

export default function ProductInfo() {
  function ProductCard({item}) {
    return (
      <View style={styles.card}>
        <View style={{width: '20%'}}>
          <Image
            style={styles.Img}
            resizeMode="contain"
            source={{uri: item.productImage}}
          />
        </View>
        <View style={{justifyContent: 'center', width: '43%'}}>
          <Text style={[styles.text, {marginTop: wp * 0.01}]}>
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
          <View style={{flexDirection: 'row', marginTop: wp * 0.01}}>
            <Text style={styles.text}>{item.brand}</Text>
            <Text
              style={[styles.text, {fontWeight: '400', fontSize: wp * 0.03}]}>
              {item.name}
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.03,
                marginVertical: wp * 0.01,
              },
            ]}>
            {item.type}
          </Text>
        </View>
        <View style={{justifyContent: 'center', with: '30%'}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp * 0.02,
            }}>
            <Text style={styles.text}>Price: Rs.{item.price} </Text>
            <TouchableOpacity>
              <Icon name="pencil-outline" size={wp * 0.04} color="#7465B6" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: wp * 0.02}}>
            <Text style={styles.text}>Stock: {item.stock} </Text>
            <TouchableOpacity>
              <Icon name="pencil-outline" size={wp * 0.04} color="#7465B6" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position: 'absolute', right: wp * 0.01, top: wp * 0.01}}>
          <TouchableOpacity>
            <Icon name="dots-vertical" size={wp * 0.05} color="#7465B6" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.infoBar}>
          <Text style={styles.text}> Product Information</Text>
        </View>

        <FlatList
          numColumns={1}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ProductCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },
  card: {
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: 'white',
    marginBottom: wp * 0.01,
  },
  infoBar: {
    height: wp * 0.1,

    alignItems: 'center',
    width: '100%',
    padding: wp * 0.025,
    backgroundColor: '#D0C7F6',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
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
