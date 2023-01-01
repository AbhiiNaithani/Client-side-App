import Icon from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native';
import ExploreCard from '../components/ExploreCard';
// import {searchProduct} from '../store/actions/product_action';

const wp = Dimensions.get('window').width;

const StaticProductImage =
  'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg';
const Starimg =
  'data:image/png;base64,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';

const products = [
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: Starimg,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: Starimg,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: Starimg,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 1999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: Starimg,
  },
  {
    brand: 'bOAt',
    type: 'Headphones',
    name: 'Wireless Over Ear headphones',
    price: 999,
    originalPrice: 2999,
    Discount: 50,
    productImage: StaticProductImage,
    Rating: Starimg,
  },
];

function ExploreScreen() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isSortByClicked, setIsSortByClicked] = useState(false);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [isBrandClicked, setIsBrandClicked] = useState(false);
  const [isPriceClicked, setIsPriceClicked] = useState(false);

  function SortByHandler() {
    setIsSortByClicked(!isSortByClicked);
  }

  function FilterHandler() {
    setIsFilterClicked(!isFilterClicked);
  }

  function BrandHandler() {
    setIsBrandClicked(!isBrandClicked);
  }

  function PriceHandler() {
    setIsPriceClicked(!isPriceClicked);
  }

  useEffect(() => {
    const getProducts = async () => {
      const keyword = 'Supernova';
      const json = await dispatch(searchProduct(keyword));
      console.log('asasa', json);
      setItems(json.msz);
    };

    getProducts();
  }, []);
  {
    return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Icon
                style={styles.icon}
                name="arrow-back"
                size={wp * 0.08}
                color="#000000"
              />
            </TouchableOpacity>
            <View>
              <TextInput
                placeholder="Search"
                placeholderTextColor={'#DADADA'}
                style={{
                  color: 'black',
                  fontSize: wp * 0.055,
                  fontWeight: 'bold',
                  marginBottom: wp * 0.001,
                  width: wp * 0.38,
                }}
                value={'Headphones'}
              />
            </View>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Icon
                style={styles.icon}
                name="search"
                size={wp * 0.08}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Icon
                style={styles.icon}
                name="heart-outline"
                size={wp * 0.08}
                color="#000000"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Cart
                style={styles.icon}
                name="shopping-basket"
                size={wp * 0.08}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={SortByHandler} style={styles.roundButton}>
            <Text style={styles.text}>Sort by</Text>
            <MaterialIcons
              name={
                isSortByClicked ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
              }
              size={wp * 0.04}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={FilterHandler} style={styles.roundButton}>
            <MaterialIcons name="filter-list" size={wp * 0.04} color="black" />
            <Text style={styles.text}>Filter</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={BrandHandler} style={styles.roundButton}>
            <Text style={styles.text}>Brand</Text>
            <MaterialIcons
              name={
                isBrandClicked ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
              }
              size={wp * 0.04}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={PriceHandler} style={styles.roundButton}>
            <Text style={styles.text}>Price</Text>
            <MaterialIcons
              name={
                isPriceClicked ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
              }
              size={wp * 0.04}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ExploreCard product={item} />}></FlatList>
          <View style={{paddingBottom: 220}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ExploreScreen;
const styles = StyleSheet.create({
  icon: {
    margin: '1%',
    marginTop: '2%',
    padding: '2%',
  },
  roundButton: {
    width: '23%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: '#3F2B96',
    marginTop: '4%',
    padding: '1%',
    paddingHorizontal: '2%',
  },
  text: {
    color: 'black',
    fontSize: wp * 0.032,
  },
});
