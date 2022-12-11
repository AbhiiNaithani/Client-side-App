import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';

const wp = Dimensions.get('window').width;

export default function LoginOtp() {
  const [otp, setOtp] = useState('');

  function otpHandler(inputText) {
    setOtp(inputText);
  }

  function pressIndicator() {
    console.log('pressed');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#A8C0FF', '#3F2B96']}
        style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            marginTop: wp * 0.15,
          }}>
          <View
            style={{
              backgroundColor: '#D9D9D8',
              width: wp * 0.3,
              height: wp * 0.3,
              borderRadius: wp * 0.15,
            }}
          />
          <Text
            style={[
              styles.text,
              {
                alignSelf: 'center',
                color: 'white',
                fontSize: wp * 0.05,
                marginTop: wp * 0.05,
              },
            ]}>
            Say Something Here
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={[
              styles.text,
              {
                alignSelf: 'center',
                color: '#7465B6',
                fontSize: wp * 0.05,
                marginTop: wp * 0.05,
              },
            ]}>
            Login
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: wp * 0.08,
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

          <View
            style={{marginVertical: wp * 0.075, marginHorizontal: wp * 0.05}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                {
                  backgroundColor: '#7465B6',
                },
              ]}>
              <View>
                <Text
                  style={[styles.text, {color: 'white', fontSize: wp * 0.04}]}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text
            onPress={pressIndicator}
            style={[
              styles.text,
              {
                color: '#3F2B96',
                alignSelf: 'center',
                marginVertical: wp * 0.01,
              },
            ]}>
            Login using password?
          </Text>
          <Text
            style={{
              fontSize: wp * 0.032,
              color: '#7465B6',
              alignSelf: 'center',
              fontWeight: 'bold',
              marginVertical: wp * 0.02,
            }}>
            OR
          </Text>
          <Text style={[styles.text, {color: '#3F2B96', alignSelf: 'center'}]}>
            New to Commerece?{' '}
            <Text
              style={[styles.text, {color: '#3F2B96'}]}
              onPress={pressIndicator}>
              Create Account
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: wp * 0.1,
    alignSelf: 'center',
    width: '90%',
    height: wp * 1,
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
