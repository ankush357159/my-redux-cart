import { combineReducers } from "redux";
import cartReducer from "../redux/reducer/cartReducer";

export default combineReducers({
  cartReducer: cartReducer,
});
