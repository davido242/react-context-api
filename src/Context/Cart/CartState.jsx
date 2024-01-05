import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";


const cartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    checkout: false,
  };
}