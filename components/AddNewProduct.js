import React from "react";
import { Text ,Dimensions,View,StyleSheet,TextInput,SafeAreaView} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
export default function AddNewProduct()
{
return (
    <SafeAreaView style={{backgroundColor:'white'}}>

    <View style={{height: hp*0.113, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
        </View>
    
        <Text style={{margin:'3%',fontWeight:'bold',color:'black'}}>Select your Product Vertical</Text>
        <TextInput style={styles.input}></TextInput>
              
              <View style={styles.categories}>
               <View><Text>Clothing</Text></View>  
               <View><Text>Footwear&Accesories</Text></View>  
               <View><Text>Electronics</Text></View>  
                  </View>
                  <View style={styles.categories}>
                  <View><Text>Jewellery</Text></View>  
                  <View><Text>ASassasas</Text></View>  
                  <View><Text>dfdfddd</Text></View>  
                  </View>
                <Text style={{margin:'3%'}}>Select Product categories</Text>
                  <View style={styles.categories}>
                <View><Text>Bottomwear</Text></View> 
                <View><Text>Ethinic Wear</Text></View> 
                 <View><Text>Topwear</Text></View> 
                 <View><Text>Formal wear</Text></View> 
                <View><Text>Top wear</Text></View> 
                  </View>
                  <View style={styles.categories}>
                  <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                  </View>

                  <Text style={{margin:'3%'}}>Select Product Sub- Category</Text>
                  <View style={styles.categories}>
                 <View><Text>Jeans</Text></View>
                 <View><Text>Skirt</Text></View>
                 <View><Text>Short</Text></View>
                 <View><Text>Pajamas</Text></View>
              <   View><Text>Pant</Text></View>
                  </View>

                  <View style={styles.categories}>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                <View><Text>Topwear</Text></View>
                  </View>
                  <View style={styles.btn}>
                    <Text style={{color:'white',margin:'2%'}}>Add Product Information</Text>
                  </View>
        </SafeAreaView>

);


}

const styles=StyleSheet.create(
    {
        input:
        {
            height:hp*0.055,
            width:'90%',
            marginTop:'4%',
            marginLeft:'5%',
            marginRight:'5%',
            backgroundColor:'green',
            borderwidth:2,
            borderRadius:10,
            color:'black'
        },
        btn:
        {
            height:hp*0.055,
            alignItems:'center',
            width:'90%',
            marginTop:'4%',
            marginLeft:'5%',
            marginRight:'5%',
            backgroundColor:'#3F2B96',
            borderwidth:2,
            borderRadius:10,
            fontSize:1
        },
        categories:
            {
            
                bordercolor:'green',
                borderwidth:1,
                margin:'3%',
                flexDirection:'row',
                justifyContent:'space-evenly',
                fontSize:5

            }
    }
)