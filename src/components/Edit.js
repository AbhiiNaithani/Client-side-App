import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function Edit({visibility, title, ModalHandler, Handler}) {
  const [text, setText] = useState('');

  function inputTextHandler(input) {
    setText(input);
  }
  function SaveHandler() {
    Handler(text);
    ModalHandler();
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visibility}
      nRequestClose={ModalHandler}>
      <TouchableOpacity
        disabled={true}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            padding: wp * 0.04,
            // height: hp * 0.2,
            width: wp * 0.85,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#7465B6',
            borderRadius: wp * 0.02,
            elevation: 4,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.text,
                {fontSize: wp * 0.04, marginRight: wp * 0.02},
              ]}>
              {title}
            </Text>
            <Icon name="pencil" size={wp * 0.05} color="#7465B6" />
          </View>
          <TextInput
            style={{
              height: wp * 0.1,
              width: wp * 0.75,
              fontSize: wp * 0.04,
              color: 'black',
              // textAlignVertical: 'center',
              marginTop: wp * 0.015,
              marginBottom: wp * 0.03,
              borderWidth: 1,
              borderRadius: wp * 0.01,
              borderColor: '#DADADA',
            }}
            onChangeText={inputTextHandler}
            value={text}
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text
              onPress={ModalHandler}
              style={[
                styles.text,
                {
                  color: '#FF0000',
                  marginRight: wp * 0.12,
                  fontSize: wp * 0.035,
                },
              ]}>
              Cancel
            </Text>
            <Text
              onPress={SaveHandler}
              style={[
                styles.text,
                {
                  color: '#7465B6',
                  marginRight: wp * 0.06,
                  fontSize: wp * 0.035,
                },
              ]}>
              Save
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
