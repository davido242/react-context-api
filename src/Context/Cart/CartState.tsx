import { useReducer } from "react";
import CartContext from "./CartContext.tsx";
import CartReducer from "./CartReducer.tsx";
import { sumItems } from "./CartReducer.tsx";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CLEAR,
  CHECKOUT
} from './CartTypes.ts';

type TState = {
  cartItems: any[];
  checkout: boolean;
};

const CartState = ({ children }) => {
  const initialState: TState = {
    cartItems: [],
    checkout: false,
  };

  const [state, dispatch] = useReducer<(state: TState, actions: any) => TState>(CartReducer, initialState);

  const addToCart = (payload) => {
    dispatch({ type: ADD_TO_CART, payload });
  }

  const increase = (payload) => {
    dispatch({ type: INCREASE, payload});
  }

  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload});
  }

  const removeFromCart = (payload) => {
    dispatch({ type: REMOVE_ITEM, payload});
  }
  
  const clearCart = (payload) => {
    dispatch({ type: CLEAR, payload});
  }

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT });
  };

  return (
    <CartContext.Provider value={{
      addToCart,
      removeFromCart,
      increase,
      decrease,
      handleCheckout,
      clearCart,
      ...state
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState;