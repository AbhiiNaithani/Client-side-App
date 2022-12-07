import React from "react";
import { Text, View,StyleSheet,Dimensions,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
export default function CategoryCard({item})
{
    return (
        
        <View style={{borderWidth:2,bordercolor:'#D9D9D9',flexDirection:'row',justifyContent:'space-between',borderRadius:10}}>
        <View><Image style={styles.Img} source={{ uri: item.productImage }} /></View>
        <View styles={{height:wp*0.02,width:0.03}}><Text>{item.sub}</Text></View>
                    </View>
    );
}

const styles=StyleSheet.create(
    {
    text:
    {
        fontWeight:'bold',
        Color:'#000000',
        fontSize:17
    },
    subhead:
    {
        fontWeight:'bold',
        Color:'black',
        fontSize:12
    },
    Img: {
        backgroundColor: 'pink',
        width: 0.106*wp,
        height: 0.06*hp,
    
    }
}
)