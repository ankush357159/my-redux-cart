import { Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => {
  return {
    summary__title: {},
  };
});
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={classes.cart}>
      <div className={classes.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={classes.cart__summary}>
        <Typography className={classes.summary__title}>Cart Summary</Typography>
        <Typography className={classes.summary__price}>
          <span>TOTAL: </span>
          <span> ₹ {totalPrice}</span>
          {totalItems == 1 ? (
            <span>({totalItems} item)</span>
          ) : (
            <span>({totalItems} items)</span>
          )}
        </Typography>
        <Button
          className={classes.summary__checkoutBtn}
          variant='contained'
          color='primary'
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
