
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function ProductCard({item})  {
        return (
            <View style={{marginTop:'6%',backgroundColor:'orange'}}>
            <View style={{marginLeft:'5%',alignSelf:'baseline'}}>
                <Image style={styles.Img} source={{ uri: item.productImage }} />
               <View style={{flexDirection:'row'}}>
                <Text style={{ marginLeft:'3%', fontWeight: 'bold' }}>{item.brand}</Text>
                <Text style={{marginLeft:'25%'}}>Stocks:</Text>
                <Text style={{marginLeft:'2%',color:'green'}}>10000</Text>
                </View>
                <Text style={{ fontSize: 13 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row'}} >
                    <Text style={{ fontWeight: 'bold', color: '#FD841F' }}>{item.price}</Text>
                    <Text style={{ fontWeight: 'bold', paddingLeft: '5%', textDecorationLine: 'line-through' }}>{item.mrp}</Text>
                    
                </View> 
                
            </View>
            <View style={{ flexDirection: 'row'}}>
            <View style={{borderColor:'#3F2B96',width:'60%',height:'150%',borderWidth:2,marginLeft:'6%'}}>
             <Text style={{textAlign:'center',color:'#3F2B96',fontSize:18,marginTop:'3%'}}>Edit</Text>
             </View>
              </View>
              <View style={{margin:'5%'}}>
                </View>
              </View>
        );
}
const styles = StyleSheet.create(
    {
        Img: {
            width: 0.37*wp,
            height: 0.3*hp,
        
        }

    }
)