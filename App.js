import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './src/Screens/Home';
import OrderScreen from './src/Screens/OrderScreen';
import ListingScreen from './src/Screens/ListingScreen';

const Tab = createMaterialBottomTabNavigator();
function App() {
  const layout = useWindowDimensions();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#7465B6"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={layout.width * 0.05} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({color}) => (
              <Icon name="box-open" color={color} size={layout.width * 0.05} />
            ),
          }}
        />
        <Tab.Screen
          name="Listings"
          component={ListingScreen}
          options={{
            tabBarLabel: 'Listings',
            tabBarIcon: ({color}) => (
              <Icon name="list-alt" color={color} size={layout.width * 0.05} />
            ),
          }}
        />
        <Tab.Screen
          name="Returns"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Returns',
            tabBarIcon: ({color}) => (
              <Icon
                name="truck-loading"
                color={color}
                size={layout.width * 0.05}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({color}) => (
              <Icon name="bell" color={color} size={layout.width * 0.05} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
