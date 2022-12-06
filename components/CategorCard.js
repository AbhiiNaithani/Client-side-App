import React from "react";
import { Text, View,StyleSheet,Dimensions,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function CategoCard({item})
{
    return (
        <View style={{borderWidth:2,bordercolor:'#D9D9D9'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Image style={styles.Img} source={{ uri: item.productImage }} />
        <Text>{Hello}</Text>
                    </View>
                </View> 
        
    );
}
export default OrderCard;

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
        width: 0.25*wp,
        height: 0.26*hp,
    
    }
}
)