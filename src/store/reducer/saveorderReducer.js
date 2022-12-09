import { SAVE_ORDER_INFO } from "../action/type";
const intialState = {pending:[],RTS:[],shipped:[],cancelled:[]};

// const initialState = {cartProduct : []};
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case SAVE_ORDER_INFO:
        // return payload;
        return {
          pending :payload.pending,
          RTS :payload.RTS,
          shipped :payload.shipped,
          cancelled :payload.cancelled,
        };
      
      default:
        return state;
    }
  };