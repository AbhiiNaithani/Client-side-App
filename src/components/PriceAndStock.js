import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

obj = [
  {
    productID: '111',
    sellerID: '000',
    manufacturerID: 'ooo',
    SKUID: 'SKUID',
    styleCode: 'styleCode',
    packageHeight: 5,
    packageLength: 5,
    packageWeight: 5,
    packageWidth: 5,
    imageUrls: ['imageUrls'],
    specification: {fit: 'Regular', index: 5, Working: true},
    gender: 'Male',
    brand: 'brand',
    title: 'title',
    description: 'description',
    vertical: 'vertical',
    category: 'category',
    subCategory: 'subCategory',
    price: 8,
    mrp: 8,
    stockCount: 6,
    variants: [],
    pickupAddress: {firstLine: 'Yo', postalcode: 6666},
  },
];

function PriceAndStock() {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: '5%'}}>
          <Text style={styles.text}>Price Details</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>MRP</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input} value={obj.mrp} />
          <Text style={styles.hint}>Maximum retail price of the product.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Your Selling Price</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>
            Price at which you want to sell this product.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Stock</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>Number of items you have in stock.</Text>
          <Text style={[styles.text, {marginTop: '6%'}]}>
            Packaging Details
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Package Length</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>Length of the final package in cm.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Package Breadth</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>Breadth of the final package in cm.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Package Height</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>Height of the final package in cm.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Package Weight</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <TextInput style={styles.Input}></TextInput>
          <Text style={styles.hint}>Weight of the final package in kgs.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default PriceAndStock;
const styles = StyleSheet.create({
  Input: {
    height: '6.4%',
    borderWidth: 1,
    width: '100%',

    fontSize: wp * 0.04,
    fontWeight: 'italic',
    borderRadius: wp * 0.01,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderColor: '#DADADA',
  },
  text: {
    fontSize: wp * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: '2%',
  },
  sub: {
    fontSize: wp * 0.035,
    color: '#000000',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  imp: {
    color: 'red',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  hint: {color: '#DADADA', fontSize: wp * 0.025},
});
