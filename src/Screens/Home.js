import {Text, View, Image, Dimensions} from 'react-native';
import React ,{useEffect,useState}from "react";
import {useSelector, useDispatch} from "react-redux"
import { getorderinfo,getproduct_info } from "../store/action/productaction";
import { GET_ORDER_INFO } from "../store/action/type";

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

function Home() {
  const dispatch = useDispatch();
  const [orderinfo,setorderinfo] = useState([]);
  const [productinfo,setproductinfo] = useState([]);
  const [loading,setLoading] = useState(false);

  let pendingorder = 0,outofstock=0,lowstock=0;
  let index;



  useEffect(()=>{
    const getproduct = async()=>{
      const json1 = await dispatch(getorderinfo(`m1`));
      const json2 = await dispatch(getproduct_info(`m1`,``,`manufacturerID`));
     
      if(json1.success == true && json2.success == true){
        setLoading(true);
        setorderinfo(json1.msz)
        setproductinfo(json2.msz)
      }
    }
    getproduct();
  },[])

  if(loading){
  

    for (index = 0; index < orderinfo.length; index++)
    {
        if(orderinfo[index].orderStatus == "Pending"){
          pendingorder++;
        }
        // console.log(orderinfo[index].orderStatus);
      }
      for(index = 0 ;index<productinfo.length;index++){
        if(productinfo[index].stockCount == 0){
          outofstock++;
        }
        if(productinfo[index].stockCount <= 50){
          lowstock++;
        }
    }
  }
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '3%',
        }}>
        <View>
          <Text
            style={{
              marginLeft: '10%',
              fontWeight: 'bold',
              marginTop: '2%',
              color: '#000000',
              fontSize: 18,
            }}>
            Welcome back
          </Text>
          <Text
            style={{
              marginLeft: '10%',
              fontWeight: 'bold',
              color: '#000000',
              fontSize: 18,
              marginBottom: '2%',
            }}>
            Seller Company
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: wp * 0.1,
              height: hp * 0.06,
              borderRadius: 0.025,
              marginTop: '2%',
              backgroundColor: '#D9D9D9',
            }}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
        </View>
      </View>
      <View style={{borderWidth: 6, height: '20%', borderColor: '#D9D9D9'}}>
        {/* <Icon style={{}} name="user-circle" size={25} color="#D9D9D9"/> */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: '2%',
              fontWeight: 'bold',
              color: '#000000',
              marginLeft: '12%',
            }}>
            To do list
          </Text>
          {/* ?<Dropdown label="Stats" data={data}/> */}
        </View>
        <View
          style={{
            marginTop: '5%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderColor: '#D9D9D9',
          }}>
          <View
            style={{
              borderWidth: 4,
              borderColor: '#D9D9D9',
              paddingLeft: '3%',
              paddingRight: '3%',
              paddingVertical: '1%',
            }}>
            <Text
              style={{fontWeight: 'bold', marginTop: '2%', color: '#000000'}}>
              Pending orders
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: '2%',
                color: '#000000',
                textAlign: 'center',
              }}>
              {pendingorder}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              borderColor: '#D9D9D9',
              paddingLeft: '4%',
              paddingRight: '4%',
              paddingVertical: '1%',
            }}>
            <Text
              style={{fontWeight: 'bold', marginTop: '2%', color: '#000000'}}>
              Out of Stock
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: '2%',
                color: '#000000',
                textAlign: 'center',
              }}>
              {outofstock}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              borderColor: '#D9D9D9',
              paddingLeft: '4%',
              paddingRight: '4%',
              paddingVertical: '1%',
            }}>
            <Text
              style={{fontWeight: 'bold', marginTop: '2%', color: '#000000'}}>
              Low on Stock
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: '2%',
                color: '#000000',
                textAlign: 'center',
              }}>
             {lowstock}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text
            style={{
              margin: '4%',
              fontSize: 18,
              fontWeight: 'bold',
              height: '9%',
              color: '#000000',
            }}>
            Bussiness Insights
          </Text>
          <View>
            <View
              style={{
                height: wp * 0.57,
                borderWidth: 6,
                backgroundColor: '#D9D9D9',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingVertical: '1%',
                borderColor: '#D9D9D9',
              }}>
              <Text
                style={{fontSize: 40, textAlign: 'center', color: '#000000'}}>
                Graph
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                height: '20%',
                borderWidth: 6,
                backgroundColor: '#ffffff',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingVertical: '1%',
                borderColor: '#ffffff',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  alignSelf: 'baseline',
                  width: '49%',
                  borderWidth: 4,
                  borderColor: '#D9D9D9',
                  paddingLeft: '3%',
                  paddingRight: '3%',
                  paddingVertical: '1%',
                }}>
                <Text
                  style={{
                    marginLeft: '7%',
                    fontWeight: 'bold',
                    marginTop: '2%',
                    color: '#000000',
                  }}>
                  Views
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: '2%',
                      color: '#000000',
                    }}>
                    0000
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: '2%',
                      color: 'green',
                    }}>
                    0.37%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: '6%',
                  alignSelf: 'baseline',
                  width: '49%',
                  borderWidth: 4,
                  borderColor: '#D9D9D9',
                  paddingLeft: '4%',
                  paddingRight: '4%',
                  paddingVertical: '1%',
                }}>
                <Text
                  style={{
                    marginLeft: '7%',
                    fontWeight: 'bold',
                    marginTop: '2%',
                    color: '#000000',
                  }}>
                  Orders
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: '2%',
                      color: '#000000',
                    }}>
                    0000
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: '2%',
                      color: 'green',
                    }}>
                    0.37%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
