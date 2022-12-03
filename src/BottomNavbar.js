import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home'
class BottomNav extends React.Component {
  render() {  
  return (    
    <createBottomTabNavigator.Navigator>
    <createBottomTabNavigator.Screen name="Home" component={Home} />
    {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
  </createBottomTabNavigator.Navigator>
  );
}
}

export default BottomNav;
