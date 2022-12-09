
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

export default function ProductCard({item})  {
        return (
            <View style={{width:0.50*wp}}>
            <View style={{marginLeft:'5%',width:0.44*wp}}>
                <Image style={styles.Img} source={{ uri: item.productImage }} />
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{ fontWeight: 'bold' }}>{item.brand}</Text>
                <Text>Stocks:<Text style={{color:'green'}}>10000</Text></Text>
  
                </View>
                <Text style={{ fontSize: 13 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row'}} >
                    <Text style={{ fontWeight: 'bold', color: '#FD841F' }}>{item.price}</Text>
                    <Text style={{ fontWeight: 'bold', paddingLeft: '5%', textDecorationLine: 'line-through' }}>{item.mrp}</Text>
                    
                </View> 
                
            </View>
            <View style={{ flexDirection: 'row'}}>
            <View style={{borderColor:'#3F2B96',width:'80%',height:'150%',borderWidth:2,marginLeft:'8%'}}>
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
            backgroundColor: 'pink',
            width: 0.45*wp,
            height: 0.3*hp,
        
        }

    }
)