/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
//import BottomNav from './src/BottomNavbar' 
//import Home from './components/Home'
//import Orders from './components/Orders'
import NewProductscreen from './components/NewProduct_screen1';
import ProductListScreen from './components/productList_screen';
class App extends React.Component {

  render() {  
    
  return (    
 //<BottomNav/>
 // <Home/>
 //<Orders/>

 <ProductListScreen/>
 //<NewProductscreen/>
 );
}
}

export default App;
