import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
  Modal,
} from 'react-native';

import OrderedProductInfo from './OrderedProductInfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ship from 'react-native-vector-icons/MaterialIcons';

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

function OrderInfoCard({item}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [isReadyToShipModalVisible, setIsReadyToShipModalVisible] =
    useState(false);
  // console.log(item.buyerInfo.name);
  function OptionsHandler() {
    setIsClicked(true);
  }

  function CancelHandler() {
    setIsCancelModalVisible(true);
    setIsClicked(false);
  }

  function ReadyToShipHandler() {
    setIsReadyToShipModalVisible(true);
    setIsClicked(false);
  }

  // Alert box

  // let CancelAlert = () => {
  //   setIsClicked(false);
  //   Alert.alert(
  //     'Cancel',
  //     "Are you sure you want to cancel the order? You won't be able to recover it.",
  //     [
  //       {
  //         text: 'No',
  //         onPress: () => {
  //           console.log('Do nothing because we cancelled');
  //         },
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => {
  //           console.log('Order is cancelled.');
  //         },
  //       },
  //     ],
  //   );
  // };

  // let ReadyToShipAlert = () => {
  //   setIsClicked(false);
  //   Alert.alert(
  //     'Ready To Ship',
  //     'Order will be marked as ready to ship and delivery partner will be assigned for the order pickup.',
  //     [
  //       {
  //         text: 'No',
  //         onPress: () => {
  //           console.log('Do nothing because we cancelled');
  //         },
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => {
  //           console.log('Order is ready to ship.');
  //         },
  //       },
  //     ],
  //   );
  // };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: wp * 0.005,
        }}
        onPress={OptionsHandler}>
        <Icon name="dots-vertical" size={wp * 0.06} color="#9747FF" />
      </TouchableOpacity>
      {isClicked ? (
        <View
          style={{
            position: 'absolute',
            right: wp * 0.036,
            top: hp * 0.015,
            height: hp * 0.08,
            width: wp * 0.35,
            backgroundColor: '#D0C7F6',

            alignItems: 'center',
            zIndex: 100,
          }}>
          <Text
            onPress={CancelHandler}
            style={[styles.text, {marginTop: hp * 0.01}]}>
            Cancel
          </Text>
          <Text
            onPress={ReadyToShipHandler}
            style={[styles.text, {marginTop: hp * 0.01}]}>
            Ready To Ship
          </Text>
        </View>
      ) : null}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isCancelModalVisible}
        nRequestClose={() => setIsCancelModalVisible(false)}>
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
              <Icon name="close-circle" size={wp * 0.05} color="#F24E1E" />
              <Text style={[styles.text, {fontSize: wp * 0.04}]}>Cancel</Text>
            </View>
            <Text
              style={[
                styles.text,
                {fontWeight: '600', marginVertical: hp * 0.015},
              ]}>
              Are you sure you want to cancel the order? You won't be able to
              recover it.
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text
                onPress={() => setIsCancelModalVisible(false)}
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    marginRight: wp * 0.12,
                    fontSize: wp * 0.035,
                  },
                ]}>
                No
              </Text>
              <Text
                onPress={() => setIsCancelModalVisible(false)}
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    marginRight: wp * 0.12,
                    fontSize: wp * 0.035,
                  },
                ]}>
                Yes
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isReadyToShipModalVisible}
        nRequestClose={() => isReadyToShipModalVisible(false)}>
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
              <Ship name="local-shipping" size={wp * 0.05} color="#2FB84D" />
              <Text style={[styles.text, {fontSize: wp * 0.04}]}>
                Ready To Ship
              </Text>
            </View>
            <Text
              style={[
                styles.text,
                {fontWeight: '600', marginVertical: hp * 0.015},
              ]}>
              Order will be marked as ready to ship and delivery partner will be
              assigned for the order pickup.
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text
                onPress={() => setIsReadyToShipModalVisible(false)}
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    marginRight: wp * 0.12,
                    fontSize: wp * 0.035,
                  },
                ]}>
                No
              </Text>
              <Text
                onPress={() => setIsReadyToShipModalVisible(false)}
                style={[
                  styles.text,
                  {
                    color: '#7465B6',
                    marginRight: wp * 0.12,
                    fontSize: wp * 0.035,
                  },
                ]}>
                Yes
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={{flex: 4}}>
        <FlatList
          data={item.items}
          key={item.orderNo}
          renderItem={({item}) => <OrderedProductInfo item={item} />}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Name:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.name}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Address:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.address}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Landmark:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.landmark}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          Postal Code:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.postalCode}
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {marginBottom: wp * 0.005, fontSize: wp * 0.025},
          ]}>
          City:{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: '400',
                fontSize: wp * 0.025,
              },
            ]}>
            {item.buyerInfo.city}
          </Text>
        </Text>
      </View>
    </View>
  );
}
export default OrderInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  text: {
    color: 'black',
    fontSize: wp * 0.035,
    marginLeft: wp * 0.015,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
