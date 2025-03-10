import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ratings from './Ratings';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function WishlistItem(props) {
  const [isAddFavClicked, setIsAddFavClicked] = useState(false);
  const [isLableled, setIsLabeled] = useState(false);

  function AddFavHandler() {
    setIsAddFavClicked(!isAddFavClicked);
  }
  function LabelingHandler() {
    setIsLabeled(!isLableled);
  }

  var dis;
  getDiscount = () => {
    console.log(props.product.originalPrice - props.product.price);
    return Math.round(
      ((props.product.originalPrice - props.product.price) /
        props.product.originalPrice) *
        100,
    );
  };
  const userimg =
    'data:image/png;base64,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';
  const {name, brand, price, productImage, originalPrice, Discount, Ratingimg} =
    props.product;
  return (
    <View style={{width: 0.5 * wp}}>
      <View style={{marginLeft: '5%', width: 0.4 * wp}}>
        <TouchableOpacity style={styles.cross}>
          <Icon name="close-outline" size={wp * 0.06} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={LabelingHandler}
          style={styles.LabelingContainer}>
          <Text
            style={[
              styles.text,
              {
                color: 'white',
                textAlign: 'center',

                marginBottom: wp * 0.005,
              },
            ]}>
            Labeling
          </Text>

          <Icon
            name={isLableled ? 'checkmark-outline' : 'close-outline'}
            size={wp * 0.04}
            color={isLableled ? '#2FB84D' : '#F24E1E'}
          />
        </TouchableOpacity>
        <Image
          style={styles.Img}
          resizeMode="contain"
          source={{uri: productImage}}
        />
        <View style={{paddingHorizontal: wp * 0.02}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[styles.text, {fontSize: wp * 0.03, color: '#929292'}]}>
              {brand}
            </Text>
          </View>
          <Text style={[styles.text, {fontWeight: '650'}]}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: wp * 0.034,
                  color: '#3F2B96',
                  marginRight: wp * 0.02,
                },
              ]}>
              {'\u20B9'}
              {price}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: wp * 0.028,
                  textDecorationLine: 'line-through',
                  marginRight: wp * 0.02,
                },
              ]}>
              {'\u20B9'}
              {originalPrice}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: wp * 0.025,
                  color: '#2FB84D',
                  marginRight: wp * 0.02,
                },
              ]}>
              ({Discount}% OFF)
            </Text>
          </View>
          <Ratings stars={4.5} rating={1000} size={wp * 0.026} />
        </View>
        <Text style={[styles.text, {marginLeft: wp * 0.02}]}>
          Firm Name NAme...
        </Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text
            style={{color: 'white', fontSize: wp * 0.03, fontWeight: 'bold'}}>
            ADD TO CATALOGUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  LabelingContainer: {
    position: 'absolute',
    top: hp * 0.275,
    // right: wp * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    right: wp * 0.04,
    flexDirection: 'row',
    backgroundColor: '#000000',
    width: wp * 0.19,
    borderRadius: wp * 0.035,

    zIndex: 100,
  },

  Img: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 0.45 * wp,
    height: 0.3 * hp,
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: wp * 0.024,
    color: 'black',
    marginBottom: wp * 0.011,
  },
  cross: {
    position: 'absolute',
    zIndex: 100,
    right: 0,
    top: hp * 0.03,
    backgroundColor: '#F2F1F1',
    borderRadius: wp * 0.03,
  },
  btn: {
    backgroundColor: '#B8AAF5',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp * 0.04,
    width: wp * 0.35,
    marginHorizontal: wp * 0.01,
  },
});
