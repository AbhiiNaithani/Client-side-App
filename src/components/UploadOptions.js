import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function Edit({visibility, Cancel, Camera, Gallery, location}) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visibility}
      nRequestClose={Cancel}>
      <TouchableOpacity
        disabled={true}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: hp * 0.01,
            width: wp * 0.85,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#7465B6',
            borderRadius: wp * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4,
          }}>
          <Text
            onPress={() => {
              Camera(location);
            }}
            style={[styles.text]}>
            Take Photo
          </Text>
          <Text
            onPress={() => {
              Gallery(location);
            }}
            style={[styles.text]}>
            Choose From Gallery
          </Text>
          <Text onPress={Cancel} style={[styles.text]}>
            Cancel
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: wp * 0.038,
    marginVertical: hp * 0.01,
    color: '#7465B6',
  },
});
