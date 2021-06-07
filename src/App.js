import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { red } from "@material-ui/core/colors";
import store from "./components/redux/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path='/'>
              <div className='app'>
                <Header />
                <Products />
              </div>
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Provider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
