import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const wp = Dimensions.get('window').width;

export default function SignUpDetails() {
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function otpHandler(inputText) {
    setOtp(inputText);
  }
  function nameHandler(inputText) {
    setName(inputText);
  }

  function inputPassHandler(inputText) {
    setPassword(inputText);
  }

  function pressIndicator() {
    console.log('pressed');
  }

  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.text,
          {
            alignSelf: 'center',
            color: '#3F2B96',
            fontSize: wp * 0.05,
            marginTop: wp * 0.05,
          },
        ]}>
        Signup
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: wp * 0.06,
        }}>
        <Text style={[styles.text, {fontWeight: '500'}]}>
          Mobile Number{'  '}
          <Text
            style={{
              fontSize: wp * 0.032,
              color: '#7465B6',
              fontWeight: 'bold',
            }}>
            {'+91 1234567890'}
          </Text>
        </Text>
        <Text
          onPress={pressIndicator}
          style={[styles.text, {color: '#3F2B96'}]}>
          Change?
        </Text>
      </View>
      <Text
        style={[
          styles.text,
          {
            marginTop: wp * 0.06,
            marginLeft: wp * 0.005,
            marginBottom: wp * 0.01,
          },
        ]}>
        Enter OTP
      </Text>
      <View style={[styles.input, {flexDirection: 'row'}]}>
        <Text
          style={[
            styles.text,
            {color: '#DADADA', alignSelf: 'center', fontSize: wp * 0.04},
          ]}></Text>
        <TextInput
          placeholder="OTP"
          placeholderTextColor={'#DADADA'}
          keyboardType="number-pad"
          style={{
            height: wp * 0.1,
            width: '85%',
            color: 'black',
            textAlignVertical: 'center',
            marginTop: wp * 0.015,
          }}
          onChangeText={otpHandler}
          value={otp}
        />
      </View>
      <Text
        style={[
          styles.text,
          {
            marginTop: wp * 0.04,
            marginLeft: wp * 0.005,
            marginBottom: wp * 0.01,
          },
        ]}>
        Enter Name
      </Text>
      <View style={[styles.input]}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor={'#DADADA'}
          style={{
            height: wp * 0.1,
            width: '85%',
            color: 'black',
            textAlignVertical: 'center',
            marginTop: wp * 0.015,
          }}
          onChangeText={nameHandler}
          value={name}
        />
      </View>
      <Text
        style={[
          styles.text,
          {
            marginTop: wp * 0.04,
            marginLeft: wp * 0.005,
            marginBottom: wp * 0.01,
          },
        ]}>
        Set Password
      </Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Your Password"
          placeholderTextColor={'#DADADA'}
          style={{
            height: wp * 0.1,
            width: '90%',
            color: 'black',
          }}
          onChangeText={inputPassHandler}
          value={password}
        />
      </View>

      <View style={{marginVertical: wp * 0.05, marginHorizontal: wp * 0.055}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            {
              backgroundColor: '#7465B6',
            },
          ]}>
          <View>
            <Text style={[styles.text, {color: 'white', fontSize: wp * 0.04}]}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.text,
          {color: '#7465B6', alignSelf: 'center', marginVertical: wp * 0.01},
        ]}>
        Already An Existing User?{' '}
        <Text
          style={[styles.text, {color: '#7465B6'}]}
          onPress={pressIndicator}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: wp * 0.08,
    alignSelf: 'center',
    width: '90%',
    height: wp * 1.15,
    paddingHorizontal: wp * 0.12,
    borderRadius: wp * 0.03,
    elevation: 4,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp * 0.03,
    fontFamily: 'Montserrat',
  },
  input: {
    borderWidth: 1,
    borderRadius: wp * 0.015,
    borderColor: '#DADADA',
    height: wp * 0.1,
    padding: wp * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: wp * 0.12,
    borderRadius: wp * 0.02,
    elevation: 4,
  },
});
