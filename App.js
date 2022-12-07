/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import AddNewProduct from './components/Catgor';
import AddNewProduct2 from './components/AddProduct2';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//import BottomNav from './src/BottomNavbar' 
import Home from './components/Home'
import OrdersCard from './components/OrderCard';
import OrdersList from './components/OrdersList';
import NewProductscreen from './components/NewProduct_screen1';
import ProductListScreen from './components/productList_screen';
import CategoryScreen from './components/CategoryScreen';
const Stack = createNativeStackNavigator();
function App (){     
  return (    
  //    <NavigationContainer>
  //    <Stack.Navigator>
  //      <Stack.Screen name="Home" component={Home} />
  //    </Stack.Navigator>
  //  </NavigationContainer>
 //<BottomNav/>
 //<Home/>
 //<OrdersList/>
 //<AddNewProduct/>
 //<ProductListScreen/>
<NewProductscreen/>
 //<AddNewProduct2/>
 //<CategoryScreen/>
 );
}


export default App;
