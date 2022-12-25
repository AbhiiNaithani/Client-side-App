import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = ['red', 'blue', 'green', 'grey'];

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function Dropdown({title, style}) {
  const [isClicked, setIsClicked] = useState(false);

  function DropdownHandler() {
    setIsClicked(!isClicked);
  }

  return (
    <View>
      <TouchableOpacity style={[styles.box, style]} onPress={DropdownHandler}>
        <Text style={styles.text}>{title}</Text>

        <View style={{position: 'absolute', right: 0}}>
          <Icon
            name={isClicked ? 'menu-up' : 'menu-down'}
            size={wp * 0.06}
            color="black"
            style={{alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>

      {isClicked ? (
        <View style={[styles.availableQuantity, style]}>
          {data.map((item, index) => (
            // return console.log(color);
            <TouchableOpacity key={index} style={{alignItems: 'center'}}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: wp * 0.033,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    marginRight: wp * 0.025,
  },

  availableQuantity: {
    position: 'absolute',
    top: hp * 0.05,
    zIndex: 100,

    width: wp * 0.4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: wp * 0.02,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: wp * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp * 0.02,
    width: wp * 0.42,
    height: hp * 0.045,
    marginBottom: wp * 0.03,
  },
});
