import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function CartSteps({title, active, children}) {
  const textStyle = [styles.text];
  const stepStyle = [styles.step];
  let line = '';

  if (children !== '3') {
    line = '-------------';
  }

  if (active) {
    textStyle.push(styles.activeText);
    stepStyle.push(styles.activeStep);
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={stepStyle}>
          <Text style={textStyle}>{children}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    height: wp * 0.05,
    width: wp * 0.05,
    borderRadius: wp * 0.025,
    borderWidth: 1,
    borderColor: '#7465B6',
    backgroundColor: 'white',
  },
  activeStep: {
    height: wp * 0.055,
    width: wp * 0.055,
    borderRadius: wp * 0.0275,
    backgroundColor: '#7465B6',
    borderColor: 'white',
  },

  text: {
    color: '#7465B6',
    textAlign: 'center',
    fontSize: wp * 0.026,
    padding: wp * 0.003,
    fontWeight: '700',
  },
  activeText: {
    color: 'white',
    padding: wp * 0.006,
  },
  title: {
    fontSize: wp * 0.022,
    marginTop: hp * 0.004,
    fontFamily: 'Arimo',
    fontWeight: '700',
    color: '#7465B6',
  },
});
