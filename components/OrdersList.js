import React from "react";
import { Text, View, ScrollView,Dimensions,SafeAreaView,FlatList} from "react-native";
import OrderCard from "./OrderCard";
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
function OrdersList()
{console.log(products);
     return (
               <SafeAreaView>
               <ScrollView>
               <View style={{height: hp*0.150, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
               </View>
                <FlatList
                    numColumns={1}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    
                 renderItem={({ item }) => (<OrderCard item={item}/>)}></FlatList>
                   <View style={{ paddingBottom:'20%'}}>
               
                   </View>
                   </ScrollView>
            </SafeAreaView>
            
           );
}
export default OrdersList;