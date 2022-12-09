import React from "react";
import { Text, View, ScrollView ,StyleSheet,Dimensions,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
function OrderCard({item})
{
    // const [selected,setselected]=useState([]);
    // function isselected(marked)
    // {
    //     if(selected.includes(marked))
    //     {
    //         setselected(selected.filter(selected=>selected!==setselected))
    //         return ;
    //     }
    //     setselected(selected=>selected.concat(setselected))
    // }
    return (
        <View style={{borderWidth:2,bordercolor:'#D9D9D9'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Image style={styles.Img} source={{ uri: item.productImage }} />
               <View style={{marginRight:'4%',justifyContent:'center'}}>
                <Text style={styles.subhead}>{item.brand}</Text>
                <Text style={styles.subhead}>{item.name}</Text>
                <Text>Order ID: <Text>234567</Text></Text>
                <Text>Product ID: <Text>234567</Text></Text>
                <Text>Quantity: <Text>2</Text></Text>
                    <Text style={styles.subhead}>{item.price}</Text>
                    </View>
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
        width: 0.35*wp,
        height: 0.26*hp,
    
    }
}
)