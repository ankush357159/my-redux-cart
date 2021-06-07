import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./redux/action/cartActions";
import formatCurrency from "../utlis";

const useStyles = makeStyles({
  media: {
    height: 250,
    width: 125,
    display: "flex",
    alignItems: "center",
  },
});

const Product = ({ product, addToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={product.title} />
      <CardMedia
        className={classes.media}
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.description}
        </Typography>
        <Typography variant='h6'>
          Available Sizes:{" "}
          {product.availableSizes.map((x) => (
            <Button className={classes.button} key={x.availableSizes}>
              {x}
            </Button>
          ))}
        </Typography>
        <Typography>{formatCurrency(product.price)}</Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={() => addToCart(product.id)}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
