/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

 const mainReducer = combineReducers({
   product: productReducer,
 })
 export default mainReducer;
