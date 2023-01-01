import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderIcon from 'react-native-vector-icons/FontAwesome5';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CartSteps from './CartSteps';
import ProductImages from './ProductImages';
import PriceAndStock from './PriceAndStock';
import Shipping from './Shipping';
import PrdoductDescription from './PrdoductDescription';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

// const ProductImagesRoute = () => (
//   <View style={{flex: 1, backgroundColor: 'white'}}>
//     <ProductImages />
//   </View>
// );

// const PriceAndStockRoute = () => (
//   <View style={{flex: 1, backgroundColor: 'white'}}>
//     <PriceAndStock />
//   </View>
// );

// const ShippingRoute = () => (
//   <View style={{flex: 1, backgroundColor: 'white'}}>
//     <Shipping />
//   </View>
// );
// const ProductDescriptionRoute = () => (
//   <View style={{flex: 1, backgroundColor: 'white'}}>
//     <PrdoductDescription />
//   </View>
// );

export default function AddNewProduct2() {
  // const [index, setIndex] = useState(0);
  // const [routes] = useState([
  //   {key: 'first', title: 'Product Images'},
  //   {key: 'second', title: 'Price and Stock'},
  //   {key: 'third', title: 'Shipping'},
  //   {key: 'fourth', title: 'Product Description'},
  // ]);

  // const renderScene = SceneMap({
  //   first: ProductImagesRoute,
  //   second: PriceAndStockRoute,
  //   third: ShippingRoute,
  //   fourth: ProductDescriptionRoute,
  // });

  // const renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={{backgroundColor: '#7465B6'}}
  //     activeColor="#7465B6"
  //     inactiveColor="#929292"
  //     style={{
  //       backgroundColor: 'white',
  //       height: hp * 0.06,
  //     }}
  //     labelStyle={{
  //       fontFamily: 'Montserrat',
  //       fontWeight: 'bold',
  //       textAlign: 'center',
  //       fontSize: wp * 0.0202,
  //       margin: 0,
  //       padding: 0,
  //       textTransform: 'none',
  //     }}
  //   />
  // );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: hp * 0.07,
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#3F2B96',
        }}>
        <TouchableOpacity>
          <View style={styles.header}>
            <HeaderIcon size={24} color="white" name="angle-left" />
            <Text style={styles.headerText}>Add New Product</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.stepsContainer}>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '75%',
              top: hp * 0.027,
              left: wp * 0.15,

              zIndex: 100,
            }}>
            <CartSteps title={'Select Vertical'} active={true}>
              1
            </CartSteps>
            <CartSteps title={'Product Information'} active={true}>
              2
            </CartSteps>
            <CartSteps title={'Confirm Product'} active={false}>
              3
            </CartSteps>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderStyle: 'dashed',
              borderColor: '#7465B6',
              height: hp * 0.001,

              width: '60%',
            }}></View>
        </View>
      </View>

      <ProductImages />
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  header: {
    paddingHorizontal: wp * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    paddingLeft: wp * 0.03,
    fontSize: wp * 0.045,
    fontWeight: '700',
    fontFamily: 'Montserrat',
    marginLeft: wp * 0.01,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp * 0.08,
    marginBottom: hp * 0.002,
    elevation: 2,
    backgroundColor: 'white',
    width: '100%',
  },
});
