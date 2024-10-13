import { DUMMY_PRODUCTS } from "../../constants/data";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((cartItem) => {
          const product = DUMMY_PRODUCTS.find((item) => item.id === cartItem.id);
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              quantity={cartItem.quantity}
              price={product.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
