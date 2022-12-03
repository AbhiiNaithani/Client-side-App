import React from "react";
import { Text, View, SafeAreaView, TextInput,StyleSheet} from "react-native";
import { ScrollView } from "react-native";
function NewProductscreen ()
{
    return (
<SafeAreaView>
  
      <ScrollView>
      <View style={{height:'4%',backgroundColor:'#3F2B96'}}>
         </View>
        <Text style={styles.text}>Price Details</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>MRP</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Maximum retail Price of Products</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Your Selling Price</Text>
        <Text style={styles.imp}>*</Text>
        </View> 
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Price at which you want to sell Products</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Stock</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>No of items in Stocks</Text>
        <Text style={styles.text}>Package Details</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Package length</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Length of final Package in cm</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Package breadth</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Breadth of final Package in cm</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Package height</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>Weight of final Package in cm</Text>
        <View style={{flexDirection:'row'}}>
            
        <Text style={styles.sub}>Package weight</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.hint}>weight of final Package in cm</Text>
        <Text style={styles.text}>Shipping address</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Line 1</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <Text style={styles.sub}>Line 2</Text>
        <TextInput style={styles.Input}></TextInput>
      <Text style={styles.sub}>Landmark</Text>
      <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>City</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Postal</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Country</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        
        <Text style={styles.text}>Specification</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Fit</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Fabric</Text>
        <Text style={styles.imp}>*</Text>
        </View>
    
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Quality</Text>
        <Text style={styles.imp}>*</Text>
   </View>
        <TextInput style={styles.Input}></TextInput>
   
        <View style={{padding:'16%'}}></View>
      </ScrollView>
      </SafeAreaView>
    );
}
export default NewProductscreen;
const styles = StyleSheet.create(
  {
      Input: 
      {
        height:'3%',
        borderWidth:1,
        width:'88%',
        marginTop:'2%',
        fontSize:15,
        fontWeight:'italic',
        borderRadius:10,
        color:'black',
        backgroundColor:'#FFFFFF',
        bordercolor:'#DADADA',
        marginLeft:'5%'
      },
      text:
      {
        marginLeft:'5%',
        fontSize:15,
        fontWeight:'bold',
        color:'#000000',
        marginTop:'2%'
      },
      sub:
      {
        marginLeft:'5%',
        fontSize:15,
        color:'#000000',
        marginTop:'2%'
      },
      imp:
      {
        color:'red',
        marginTop:'2%'
      },
      hint:
      {marginLeft:'5%',
      Fontsize:3,
      color:'grey'}
      
  }
)
