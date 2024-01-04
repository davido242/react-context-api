import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR
} from './CartTypes';

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
  Storage(cartItems);

  let itemCount = cartItems.reduce(
    (total, product) => {
      total + product.quantity, 0
    }
  );

  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

    return { itemCount, total };
};



