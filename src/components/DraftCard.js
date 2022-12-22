import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wp = Dimensions.get('window').width;

export default function DraftCard({item}) {
  const [isSelected, setIsSelected] = useState(false);

  function selectionHandler() {
    setIsSelected(!isSelected);
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={selectionHandler} style={styles.checkBox}>
        {
          <Icon
            // style={
            //   !isSelected
            //     ? {backgroundColor: 'white'}
            //     : {backgroundColorP: null}
            // }
            name={isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={isSelected ? '#3F2B96' : '#3F2B96'}
          />
        }
      </TouchableOpacity>
      <View
        style={{
          flex: 3,
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.Img}
            resizeMode="contain"
            source={{uri: item.productImage}}
          />
          <Text style={[styles.text, {marginTop: wp * 0.05}]}>
            SKU ID: {'  '}
            <Text
              style={[
                styles.text,
                {
                  fontWeight: '400',
                  fontSize: wp * 0.03,
                },
              ]}>
              {item.SkuId}
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{item.brand}</Text>
          <Text style={[styles.text, {fontWeight: '400', fontSize: wp * 0.03}]}>
            {item.name}
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            {fontWeight: '400', fontSize: wp * 0.03, marginBottom: wp * 0.01},
          ]}>
          {item.genre}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, fontWeight: '400'}]}>
          {item.createdOn}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: wp * 0.005,
          borderRightColor: '#7465B6',
        }}>
        <Text style={[styles.text, {marginLeft: 0, fontWeight: '400'}]}>
          {item.modifiedOn}
        </Text>
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={wp * 0.045} color="#9747FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    position: 'absolute',
    // backgroundColor: 'white',

    left: wp * 0.01,
    zIndex: 100,
  },
  card: {
    borderWidth: wp * 0.005,
    borderColor: '#7465B6',
    marginHorizontal: wp * 0.01,
    flexDirection: 'row',
    marginBottom: wp * 0.01,
  },
  Img: {
    marginTop: wp * 0.02,
    backgroundColor: 'white',
    width: 0.1 * wp,
    height: 0.1 * wp,
  },
  text: {
    color: 'black',
    fontSize: wp * 0.03,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
