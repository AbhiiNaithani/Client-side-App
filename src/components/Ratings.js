import {StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/MaterialIcons';

const wp = Dimensions.get('window').width;

export default function Ratings({stars, rating}) {
  const ratingStar = Array.from({length: 5}, (elem, index) => {
    let number = index + 0.5;

    return (
      <View key={index}>
        {stars >= index + 1 ? (
          <Star name="star" size={wp * 0.028} color="#FFB800" />
        ) : stars >= number ? (
          <Star name="star-half" size={wp * 0.028} color="#FFB800" />
        ) : (
          <Star name="star-border" size={wp * 0.028} color="#FFB800" />
        )}
      </View>
    );
  });
  return (
    <View style={styles.ratingContainer}>
      {ratingStar}
      <Text style={styles.ratingsText}>({rating})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  ratingsText: {
    fontFamily: 'Montserrate',
    fontSize: wp * 0.02,
    fontWeight: '700',
    marginLeft: 2,
    color: '#929292',
  },
});
