import { Grid, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import Product from "./Product";

const useStyles = makeStyles((theme) => {
  return {
    product__container: {
      position: "absolute",
    },
    products: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "20%",
    },
  };
});

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.product__container}>
      <Grid item xs={12} md={6} lg={4} className={classes.products}>
        {products.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cartReducer.products,
  };
};

export default connect(mapStateToProps)(Products);
