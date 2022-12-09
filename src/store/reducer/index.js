import {combineReducers} from 'redux';
import getorderReducer from './getorderReducer';
import getproductReducer from './getproductReducer';
import saveorderinfo from "./saveorderReducer"



export default combineReducers({
  // auth: authReducer,
  getorderReducer: getorderReducer,
  getproductReducer:getproductReducer,
  saveorderinfo:saveorderinfo
})