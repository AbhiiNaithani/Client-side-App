import React, {useState} from 'react';
import {View, useWindowDimensions, SafeAreaView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ProductList from '../components/ProductList';

const MyProductsRoute = () => <ProductList />;

const InProgressRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const DraftsRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

export default function ListingScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'My Products'},
    {key: 'second', title: 'In Progress'},
    {key: 'third', title: 'Drafts'},
  ]);

  const renderScene = SceneMap({
    first: MyProductsRoute,
    second: InProgressRoute,
    third: DraftsRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: '#3F2B96'}}
      labelStyle={{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: layout.width * 0.035,
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
