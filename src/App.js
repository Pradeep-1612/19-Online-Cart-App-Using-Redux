import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cartActions } from "./store/cart";
import { fetchCartData, saveCartData } from "./store/cart-effects";
import Notification from "./components/UI/Notification";

let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const hasCartItemsChanged = useSelector(
    (state) => state.cart.hasCartItemsChanged
  );
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    /* Sending a HTTP request using a Action creator thunk */
    if (hasCartItemsChanged) {
      dispatch(saveCartData(cartItems));
    }

    /* 
     * Sending a HTTP request inside a component
     *

    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://react-http-1022b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );
      if (!response.ok) {
        throw new Error("Error in sending data");
      }

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );

      // return response.json();
    };

    sendCartData().catch(() => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart failed!",
        })
      );
    });
    */
  }, [dispatch, cartItems, hasCartItemsChanged]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && <Notification {...notification}></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
