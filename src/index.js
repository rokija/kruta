import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
