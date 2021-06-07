import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Badge,
  createMuiTheme,
  fade,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: "white",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    display: "flex",
  },
  cart: {
    textDecoration: "none",
  },
  menuButton: {
    color: "#e1e6b3",
  },
  title: {
    display: "none",
    text: {
      primary: "white",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      flexGrow: 1,
    },
  },

  search: {
    position: "relative",
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: "100%",
      position: "absolute",
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={theme}>
            <Typography className={classes.title} variant='h6'>
              Shopping-cart
            </Typography>
          </ThemeProvider>

          <div className={classes.search} color='inherit'>
            <div className={classes.searchIcon} color='inherit'>
              <SearchIcon />
            </div>
          </div>

          <div className={classes.root}>
            <Link to='/cart'>
              <IconButton color='inherit' className={classes.cart}>
                <Badge badgeContent={1} color='secondary'>
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton color='inherit'>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
