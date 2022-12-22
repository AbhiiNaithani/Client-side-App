import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DraftCard from './DraftCard';

const products = [
  {
    brand: 'bOAt',
    genre: 'Headphones',
    name: 'Wireless Over Ear headphones',

    type: 'Create',
    status: 'Pending',
    createdOn: '12/12/22',
    modifiedOn: '12/12/22',
    SkuId: 12132232323,
    originalPrice: 1999,

    productImage: 'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
  },
  {
    brand: 'bOAt',
    genre: 'Headphones',
    name: 'Wireless Over Ear headphones',

    type: 'Edit',
    status: 'Approved',
    createdOn: '12/12/22',
    modifiedOn: '12/12/22',
    SkuId: 12132232323,
    originalPrice: 1999,

    productImage: 'https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg',
  },
];

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function DraftsList() {
  const [allSelected, setAllSelected] = useState(false);

  function allSelectionHandler() {
    setAllSelected(!allSelected);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.selectionBar}>
          <TouchableOpacity
            onPress={allSelectionHandler}
            style={{position: 'absolute', left: wp * 0.015}}>
            {
              <Icon
                name={
                  allSelected ? 'checkbox-marked' : 'checkbox-blank-outline'
                }
                size={24}
                color={allSelected ? '#3F2B96' : '#3F2B96'}
              />
            }
          </TouchableOpacity>
          <View
            style={{
              flex: 2.7,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={styles.text}> Product Information</Text>
          </View>

          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.text}>Created On</Text>
          </View>
          <View
            style={{
              flex: 1.2,
            }}>
            <Text style={styles.text}> Modified On</Text>
          </View>
        </View>
        <FlatList
          numColumns={1}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <DraftCard item={item} />}></FlatList>
        <View style={{paddingBottom: '20%'}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default DraftsList;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },

  selectionBar: {
    height: wp * 0.11,
    alignItems: 'center',
    // width: '100%',
    padding: wp * 0.025,
    backgroundColor: '#D0C7F6',
    margin: wp * 0.01,
    flexDirection: 'row',
  },

  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
