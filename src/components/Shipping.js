import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function Shipping() {
  return (
    <ScrollView>
      <View style={{flex: 1, marginHorizontal: '5%'}}>
        <Text style={styles.text}>Shipping address</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Line 1</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.sub}>Line 2</Text>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.sub}>Landmark</Text>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>City</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Postal Code</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Country</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>

        <Text style={[styles.text, {marginTop: '4%'}]}>Specifications</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Fit</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Fit of the dress.</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Fabric</Text>
          <Text style={styles.imp}>*</Text>
        </View>

        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Fabric.</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.sub}>Fabric Quality</Text>
          <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Quality of the fabric.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Input: {
    height: '5%',
    borderWidth: 1,
    width: '100%',

    fontSize: wp * 0.04,
    fontWeight: 'italic',
    borderRadius: wp * 0.01,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderColor: '#DADADA',
  },
  text: {
    fontSize: wp * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: '2%',
  },
  sub: {
    fontSize: wp * 0.035,
    color: '#000000',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  imp: {
    color: 'red',
    marginTop: '1%',
    fontWeight: 'bold',
  },
  hint: {color: '#DADADA', fontSize: wp * 0.025},
});
