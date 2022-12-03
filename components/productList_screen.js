import Icon from 'react-native-vector-icons/FontAwesome'; 
import React from "react";
import { StyleSheet, View, SafeAreaView, Text,TouchableOpacity, ScrollView ,Dimensions, TextInput} from 'react-native';
import {
    FlatList,
} from 'react-native';
import ProductCard from '../components/productCard';
const StaticProductImage = "https://m.media-amazon.com/images/I/61m8ZyGvL2L._SX466_.jpg";

 
 const products = [
     { brand: "bOAt", type: "Headphones", name: "Wireless Over Ear headphones", price: 999, originalPrice: 1999, Discount: 50, productImage: StaticProductImage },
     { brand: "bOAt", type: "Headphones", name: "Wireless Over Ear headphones", price: 999, originalPrice: 1999, Discount: 50, productImage: StaticProductImage},
     { brand: "bOAt", type: "Headphones", name: "Wireless Over Ear headphones", price: 999, originalPrice: 1999, Discount: 50, productImage: StaticProductImage},
     { brand: "bOAt", type: "Headphones", name: "Wireless Over Ear headphones", price: 999, originalPrice: 1999, Discount: 50, productImage: StaticProductImage},
     { brand: "bOAt", type: "Headphones", name: "Wireless Over Ear headphones", price: 999, originalPrice: 2999, Discount: 50, productImage: StaticProductImage}
 ];

 const wp = Dimensions.get('window').width;
 const hp = Dimensions.get('window').height;
function ProductListScreen() {
  return (
            <SafeAreaView>
            <ScrollView>
            <View style={{height: hp*0.150, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
            <TextInput style={{height:hp*0.055,width:'90%',marginTop:'4%',marginLeft:'5%',marginRight:'5%',padding:'0%',backgroundColor:'white',borderwidth:2,borderRadius:10}}>
              </TextInput>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
              <Text style={{marginTop:'1%',color:'white',fontSize:17}}>MY PRODUCTS</Text>
              <Text style={{marginTop:'1%',color:'white',fontSize:17}}>IN PROGRESS</Text>
            </View>
            </View>
             <FlatList
                 numColumns={2}
                 data={products}
                 keyExtractor={(item, index) => index.toString()}
              
              renderItem={({ item }) => (<ProductCard item={item}/>)}></FlatList>
              
                <View style={{ paddingBottom:220}}>
            
                </View>
                </ScrollView>
         </SafeAreaView>
         
        );
    }
export default ProductListScreen;