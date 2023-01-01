import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useWindowDimensions, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './src/Screens/Home';
import OrderScreen from './src/Screens/OrderScreen';
import ListingScreen from './src/Screens/ListingScreen';
import LoginOtp from './src/components/LoginOtp';
import LoginPass from './src/components/LoginPass';
import SignUp from './src/components/SignUp';
import SignUpDetails from './src/components/SignUpDetails';
import AddNewProduct2 from './src/components/AddNewProduct2';
import ExploreScreen from './src/Screens/ExploreScreen';
import WishlistScreen from './src/Screens/WishlistScreen';
import YourStore from './src/components/YourStore';

const Tab = createMaterialBottomTabNavigator();
function App() {
  const layout = useWindowDimensions();
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Feed"
    //     activeColor="#7465B6"
    //     barStyle={{backgroundColor: 'white'}}>
    //     <Tab.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         tabBarLabel: 'Home',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="home" color={color} size={layout.width * 0.05} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Explore"
    //       component={ExploreScreen}
    //       options={{
    //         tabBarLabel: 'Explore',
    //         tabBarIcon: ({color}) => (
    //           <Icon
    //             style={styles.icon}
    //             name="search"
    //             size={layout.width * 0.05}
    //             color={color}
    //           />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Products"
    //       component={ListingScreen}
    //       options={{
    //         tabBarLabel: 'Products',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="list-alt" color={color} size={layout.width * 0.05} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Wishlist"
    //       component={WishlistScreen}
    //       options={{
    //         tabBarLabel: 'Wishlist',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="heart" color={color} size={layout.width * 0.05} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Notifications"
    //       component={ExploreScreen}
    //       options={{
    //         tabBarLabel: 'Notifications',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="bell" color={color} size={layout.width * 0.05} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <LoginOtp />
    // <LoginPass/>
    // <SignUp/>
    // <SignUpDetails/>
    <AddNewProduct2 />
    // <YourStore />
  );
}
export default App;
