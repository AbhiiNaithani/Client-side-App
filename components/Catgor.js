import React from "react";
import { Text ,Dimensions,View,StyleSheet,TextInput,SafeAreaView, LogBox} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
export default function AddNewProduct()
{
return (
    <SafeAreaView >

    <View style={{height: hp*0.113, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
        </View>
    
        <Text style={{margin:'3%',fontWeight:'bold',color:'black'}}>Select your Product Vertical</Text>
        <TextInput style={styles.input}></TextInput>
              
              <View style={styles.categories}>
               <View style={styles.box}><Text style={styles.txt}>Clothing</Text></View>  
               <View style={styles.box}><Text style={styles.txt}>Footwear&Accesories</Text></View>  
               <View style={styles.box}><Text style={styles.txt}>Electronics</Text></View>  
                  </View>
                  <View style={styles.categories}>
                  <View style={styles.box}><Text style={styles.txt}>Jewellery</Text></View>  
                  <View style={styles.box}><Text style={styles.txt}>ASassasas</Text></View>  
                  <View style={styles.box}><Text style={styles.txt}>dfdfddd</Text></View>  
                  </View>
                <Text style={{margin:'3%',fontWeight:'bold'}}>Select Product categories</Text>
                  <View style={styles.categories}>
                <View style={styles.box}><Text style={styles.txt}>Bottomwear</Text></View> 
                <View style={styles.box}><Text style={styles.txt}>Ethinic Wear</Text></View> 
                 <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View> 
                 <View style={styles.box}><Text style={styles.txt}>Formal wear</Text></View> 
                <View style={styles.box}><Text style={styles.txt}>Top wear</Text></View> 
                  </View>
                  <View style={styles.categories}>
                  <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                  </View>

                  <Text style={{margin:'3%',fontWeight:'bold'}}>Select Product Sub- Category</Text>
                  <View style={styles.categories}>
                 <View style={styles.box}><Text style={styles.txt}>Jeans</Text></View>
                 <View style={styles.box}><Text style={styles.txt}>Skirt</Text></View>
                 <View style={styles.box}><Text style={styles.txt}>Short</Text></View>
                 <View style={styles.box}><Text style={styles.txt}>Pajamas</Text></View>
              <   View style={styles.box}><Text style={styles.txt}>Pant</Text></View>
                  </View>

                  <View style={styles.categories}>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
                <View style={styles.box}><Text style={styles.txt}>Topwear</Text></View>
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
            backgroundColor:'#D9D9D9',
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
              
                margin:'3%',
                flexDirection:'row',
                justifyContent:'space-evenly',

            },
          box:
          {
            borderColor:'#D9D9D9',
            borderWidth:2,
            borderRadius:12,
          },  
          txt:
          {
            fontSize:13
          }
    }
)