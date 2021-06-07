import {
  Box,
  Button,
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { adjustItemQty, removeFromCart } from "./redux/action/cartActions";
import { connect } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      margin: "auto",
      alignItems: "center",
    },
    image: {
      height: 100,
      width: 75,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    textFiled: {
      "& .MuiTextField-textFiled": {
        margin: theme.spacing(10),
        width: "10ch",
      },
      deleteItemBtn: {},
    },
  };
});

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} width='50%' mx='auto'>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='' src={item.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {item.title}
                </Typography>
                <Grid item>
                  <Typography className={classes.qty}>Qty</Typography>
                  <Box component='form' className={classes.textFiled}>
                    <TextField
                      id='standard-number'
                      label=''
                      defaultValue={input}
                      type='number'
                      variant='filled'
                      size='small'
                      InputLabelProps={{
                        shrink: false,
                      }}
                      onChange={onChangeHandler}
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.deleteItemBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
