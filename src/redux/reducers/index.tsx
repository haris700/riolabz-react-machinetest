import { combineReducers } from "redux";
import { productsReducer } from "./product";

const rootReducer=combineReducers({
    product:productsReducer
})
export default rootReducer