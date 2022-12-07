import React from "react";
import { Text, View,StyleSheet,Dimensions,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
export default function CategoryCard2({item})
{
    return (
        <View style={{borderWidth:2,bordercolor:'#D9D9D9',borderRadius:10}}>
        <Text>{item.sub}</Text>
                </View> 
    );
}

// const styles=StyleSheet.create(
//     )