import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.toggleCart())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>
        {cartItems.reduce(
          (totalQuantity, item) => totalQuantity + item.quantity,
          0
        )}
      </span>
    </button>
  );
};

export default CartButton;
