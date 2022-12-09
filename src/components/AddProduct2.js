import React from "react";
import { SafeAreaView, Text,Dimensions,View,StyleSheet,TextInput} from "react-native";

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
export default function AddNewProduct2()
{
return(
<SafeAreaView>
<View style={{height: hp*0.10, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
        </View>
        <View style={styles.Box}>
        </View>
        <View style={styles.btn}>
        <Text style={{color:'white',margin:'2%'}}>Uploads/Videos Photos </Text>
                  </View>
        <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
        
        <View style={styles.smallBox}>
        </View>
        <View style={styles.smallBox}>
        </View>
        <View style={styles.smallBox}>
        </View>
        <View style={styles.smallBox}>
        </View>
        <View style={styles.smallBox}>
        </View>
        <View style={styles.smallBox}>
        </View>
        </View>
        <Text style={styles.text}>Products Details</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Seller Skuid</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Style Code</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.sub}>Product Title</Text>
        <Text style={styles.imp}>*</Text>
        </View>
        <TextInput style={styles.Input}></TextInput>
        <View style={{marginEnd:'40%'}}></View>
</SafeAreaView>

);
}

styles=StyleSheet.create(
    {
      
        Box:
        {
        height: hp*0.24,
        width:'83%',
        marginTop:'3%',
        borderStyle:'dashed',
        borderColor:'#3F2B96',
        borderWidth:2,
        alignSelf:'center'
    },
        smallBox:
        {
        height: hp*0.07,
        width:'12%',
        marginTop:'3%',
        borderStyle:'dashed',
        borderColor:'#3F2B96',
        borderWidth:2
    },
        btn:
    {
        height:hp*0.055,
        alignItems:'center',
        width:'90%',
        marginTop:'3%',
        marginLeft:'5%',
        marginRight:'5%',
        backgroundColor:'#3F2B96',
        borderwidth:2,
        borderRadius:10,
        fontSize:1
    },
    Input: 
      {
        height:'6%',
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
        marginTop:'6%'
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
}
);