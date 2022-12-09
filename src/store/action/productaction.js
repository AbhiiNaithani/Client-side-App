import {GET_ORDER_INFO,GET_PRODUCT_INFO} from "./type"
import { API_URI } from "./type";
 

export const getorderinfo = (mId) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URI}/getOrder?type=${encodeURIComponent(`manufacturerID`)}&manufacturerID=${encodeURIComponent(mId)}`, {
            method: 'GET'});
        const json = await response.json();
        // console.log(json)
        if(json.success === true){
          dispatch({
              type: GET_ORDER_INFO,
              payload: json.msz
      });
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
};  

export const getproduct_info = (mId,pId,type) => async (dispatch) => {
    
    try {
        const response = await fetch(`${API_URI}/getproduct?type=${encodeURIComponent(type)}&manufacturerID=${encodeURIComponent(mId)}&productID=${encodeURIComponent(pId)}`, {
            method: 'GET'});

        const json = await response.json();
        // console.log(json)
        if(json.success === true){
          dispatch({
              type: GET_PRODUCT_INFO,
              payload: json.msz
      });
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
};  

