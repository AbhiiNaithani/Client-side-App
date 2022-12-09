import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ratings from './Ratings';
import Pencil from 'react-native-vector-icons/SimpleLineIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function ProductCard({item}) {
  return (
    <View style={{width: 0.5 * wp}}>
      <View style={{marginLeft: '5%', width: 0.4 * wp}}>
        <Image
          style={styles.Img}
          resizeMode="contain"
          source={{uri: item.productImage}}
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
              {item.brand}
            </Text>
            <Text style={[styles.text, {fontSize: wp * 0.022}]}>
              Stocks: <Text style={[styles.text, {color: 'green'}]}>10000</Text>
            </Text>
          </View>
          <Text style={[styles.text]}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[styles.text, {fontSize: wp * 0.034, color: '#3F2B96'}]}>
              {'\u20B9'}
              {item.price}
            </Text>

            <Ratings stars={item.star} rating={item.rating} />
          </View>

          <View style={styles.editContainer}>
            <TouchableOpacity>
              <View style={styles.edit}>
                <Pencil name="pencil" size={wp * 0.04} color="#7465B6" />
                <Text style={styles.addTypeText}>EDIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  editContainer: {
    height: wp * 0.07,
    width: '100%',
    borderWidth: 2,
    borderColor: '#7465B6',
    justifyContent: 'center',
    marginTop: wp * 0.015,
  },
  edit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTypeText: {
    color: '#7465B6',
    fontSize: wp * 0.027,
    fontWeight: '700',
    fontFamily: 'Arimo',
    marginHorizontal: wp * 0.02,
  },
});
