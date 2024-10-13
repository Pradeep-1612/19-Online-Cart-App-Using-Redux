import { cartActions } from "../../store/cart";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, quantity, price }) => {
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity * price).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartActions.removeItemFromCart(id))}>
            -
          </button>
          <button onClick={() => dispatch(cartActions.addItemToCart(id))}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
