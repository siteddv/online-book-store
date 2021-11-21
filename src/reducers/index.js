import { combineReducers } from "redux";
import booksReducer from "./books";
import cartReducer from "./cart";
import filterReducer from "./filter";

export default combineReducers({ booksReducer, cartReducer, filterReducer })