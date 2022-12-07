import React from "react";
import { Text, View, ScrollView,Dimensions,TextInput,SafeAreaView,FlatList,StyleSheet} from "react-native";
import CategoryCard from "./CategoryCard";
import CategoryCard2 from "./CategoryCard2";
const StaticProductImage = "data:image/jpeg;base64,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";

 
 const products = [
     {  sub:'clothing',productImage: StaticProductImage },
     { sub:'Footwear & Accesories',productImage: StaticProductImage },
     {  sub:'Electronics',productImage: StaticProductImage },
     { sub:'Jewellery',productImage: StaticProductImage },
     { sub:'Sports',productImage: StaticProductImage },
    { sub:'Asssasis',productImage: StaticProductImage }
 ];
  
 const wp = Dimensions.get('window').width;
 const hp = Dimensions.get('window').height;
export default function CategoryScreen()
{
     return (
            
               <SafeAreaView>
                
                <View style={{height: hp*0.1, justifyContent:'center',width:'100%',backgroundColor:'#3F2B96'}}>
               </View>
           
               <View style={{marginTop:'15%'}}>
               <Text style={styles.txt}>Select Product Vertical</Text>
               <TextInput style={{height:hp*0.055,width:'90%',marginTop:'4%',marginLeft:'5%',marginRight:'5%',backgroundColor:'green',borderwidth:2,borderRadius:10}}>
              </TextInput>
               <View style={{marginTop:'4%'}}>
                <FlatList
                    numColumns={3}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    
                 renderItem={({ item }) => (<CategoryCard item={item}/>)}
                 ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                justifyContent:'space-evenly'
                            }} />
                    );
                }}
            />
            </View>
            </View>
            <View style={{marginTop:'15%'}}>
            <Text style={styles.txt}>Select Product Categories</Text>
            <View style={{marginTop:'4%'}}>
                <FlatList
                    numColumns={4}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    
                 renderItem={({ item }) => (<CategoryCard2 item={item}/>)}
                 ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                justifyContent:'space-evenly'
                            }} />
                    );
                }}
            />
             </View>
           </View>

       
           <View style={{marginTop:'15%'}}>
           <Text style={styles.txt}>Select Product Sub Categories</Text> 
           <View style={{marginTop:'4%'}}>
            <FlatList
                    numColumns={4}
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    
                 renderItem={({ item }) => (<CategoryCard2 item={item}/>)}
                 ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                justifyContent:'space-between'
                            }} />
                    );
                }}
            />    
            </View>    
                       </View>
            </SafeAreaView>
            
           );
}


styles=StyleSheet.create(
{
txt:
{
color:'black',
fontWeight:'bold',
marginLeft:'2%'
}


}


);
