import React, {useState} from 'react';
import {View, useWindowDimensions, SafeAreaView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import OrdersList from '../components/OrdersList';

const PendingRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <OrdersList />
  </View>
);

const ReadyToShipRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}></View>
);

const ShippedRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const CancelledRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

export default function OrderScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Pending'},
    {key: 'second', title: 'Ready To Ship'},
    {key: 'third', title: 'Shipped'},
    {key: 'fourth', title: 'Cancelled'},
  ]);

  const renderScene = SceneMap({
    first: PendingRoute,
    second: ReadyToShipRoute,
    third: ShippedRoute,
    fourth: CancelledRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: '#3F2B96'}}
      labelStyle={{
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: layout.width * 0.03055,
        textAlign: 'center',
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'black'}}
    />
  );
}
