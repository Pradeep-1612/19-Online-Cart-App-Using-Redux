import { addCartData, getCartData } from "../services/cart-service";
import { cartActions } from "./cart";

export const saveCartData = (data) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    // const sendRequest = async () => {
    //   const response = await fetch(
    //     "https://react-http-1022b-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Error in sending data");
    //   }
    // };

    try {
      await addCartData(data);
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Items added to the cart successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Could not add items to the cart.",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await getCartData();
      dispatch(cartActions.replaceCartItems(response));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Could not fetch the cart items.",
        })
      );
    }
  };
};
