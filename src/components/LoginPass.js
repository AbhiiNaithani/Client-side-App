import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const wp = Dimensions.get('window').width;

export default function LoginPass() {
  const [mobNum, setMobNum] = useState('');
  const [password, setPassword] = useState('');

  function inputNumHandler(inputText) {
    setMobNum(inputText);
  }

  function inputPassHandler(inputText) {
    setPassword(inputText);
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
                color: '#3F2B96',
                fontSize: wp * 0.05,
                marginTop: wp * 0.05,
              },
            ]}>
            Login
          </Text>
          <Text
            style={[
              styles.text,
              {
                marginTop: wp * 0.04,
                marginLeft: wp * 0.005,
                marginBottom: wp * 0.01,
              },
            ]}>
            Enter Mobile Number
          </Text>
          <View style={[styles.input, {flexDirection: 'row'}]}>
            <Text
              style={[
                styles.text,
                {color: '#DADADA', alignSelf: 'center', fontSize: wp * 0.04},
              ]}>
              +91 |
            </Text>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={'#DADADA'}
              keyboardType="number-pad"
              style={{
                height: wp * 0.1,
                width: '85%',
                color: 'black',
                textAlignVertical: 'center',
                marginTop: wp * 0.015,
              }}
              onChangeText={inputNumHandler}
              value={mobNum}
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
            Enter Password
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
          <Text
            style={[
              styles.text,
              {
                fontSize: wp * 0.025,
                marginTop: wp * 0.04,
                marginHorizontal: wp * 0.03,
                marginBottom: wp * 0.01,
              },
            ]}>
            By continuing, you agree to our{' '}
            <Text
              style={[
                styles.text,
                {
                  fontSize: wp * 0.025,
                  color: '#7465B6',
                  textDecorationLine: 'underline',
                },
              ]}
              onPress={pressIndicator}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text
              style={[
                styles.text,
                {
                  fontSize: wp * 0.025,
                  color: '#7465B6',
                  textDecorationLine: 'underline',
                },
              ]}
              onPress={pressIndicator}>
              Privacy Policy.
            </Text>
          </Text>
          <View
            style={{marginHorizontal: wp * 0.04, marginVertical: wp * 0.04}}>
            <View>
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
                    style={[
                      styles.text,
                      {color: 'white', fontSize: wp * 0.04},
                    ]}>
                    Login
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.text,
                {
                  color: '#7465B6',
                  alignSelf: 'center',
                  marginVertical: wp * 0.02,
                },
              ]}>
              OR
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                {
                  backgroundColor: 'white',
                },
              ]}>
              <View>
                <Text
                  style={[
                    styles.text,
                    {color: '#7465B6', fontSize: wp * 0.04},
                  ]}>
                  Request OTP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.text,
              {
                color: '#7465B6',
                alignSelf: 'center',
                marginVertical: wp * 0.04,
              },
            ]}>
            New to Commerce?{' '}
            <Text
              style={[styles.text, {color: '#7465B6'}]}
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
