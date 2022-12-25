import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Dropdown from './Dropdown';
import AddVariants from './AddVariants';
import Icon from 'react-native-vector-icons/Entypo';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function PrdoductDescription() {
  return (
    <View
      style={{paddingHorizontal: wp * 0.04, paddingTop: wp * 0.03, flex: 1}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Size</Text>
          <Text style={styles.imp}>*</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Dropdown title={'Select One'} style={{width: wp * 0.55}} />
          <Dropdown title={'Regular'} style={{width: wp * 0.35}} />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Color</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <Dropdown title={'Select Color'} />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sub}>Ideal For</Text>
            <Text style={styles.imp}>*</Text>
          </View>
          <Dropdown title={'Select One'} />
        </View>
      </View>
      <View style={{marginTop: wp * 0.05}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.sub,
              {
                fontSize: wp * 0.036,
                marginRight: wp * 0.03,
                marginBottom: wp * 0.03,
              },
            ]}>
            Add Variants
          </Text>
          <TouchableOpacity>
            <Icon name="squared-plus" size={wp * 0.05} color="#CDCDCD" />
          </TouchableOpacity>
        </View>
        <AddVariants />
      </View>
      <TouchableOpacity
        style={{position: 'absolute', bottom: 0}}
        activeOpacity={0.8}>
        <View style={styles.btn}>
          <Text
            style={{color: 'white', fontWeight: 'bold', fontSize: wp * 0.04}}>
            Save Product
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sub: {
    fontSize: wp * 0.033,
    color: '#000000',

    fontWeight: 'bold',
  },
  imp: {
    color: 'red',

    fontWeight: 'bold',
  },
  btn: {
    height: hp * 0.05,
    alignItems: 'center',
    width: wp * 1,
    alignSelf: 'center',

    backgroundColor: '#7465B6',

    justifyContent: 'center',
  },
});
