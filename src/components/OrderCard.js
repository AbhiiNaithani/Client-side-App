import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderedProduct from './OrderedProduct';

const wp = Dimensions.get('window').width;

function OrderCard({item}) {
  const [isSelected, setIsSelected] = useState(false);

  function selectionHandler() {
    setIsSelected(!isSelected);
  }

  // console.log(items);
  return (
    <View style={styles.card}>
      <View style={styles.selectionBar}>
        <TouchableOpacity onPress={selectionHandler}>
          {
            <Icon
              name={isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={24}
              color={isSelected ? '#3F2B96' : '#3F2B96'}
            />
          }
        </TouchableOpacity>
        <Text style={styles.text}>Order No. {item.orderNo} </Text>
      </View>
      <View>
        <FlatList
          data={item.items}
          renderItem={({item}) => <OrderedProduct item={item} />}
        />
      </View>
    </View>
  );
}
export default OrderCard;

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    marginBottom: wp * 0.01,
    backgroundColor: 'white',
  },
  selectionBar: {
    height: wp * 0.12,
    alignItems: 'center',
    width: '100%',
    padding: wp * 0.025,
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
