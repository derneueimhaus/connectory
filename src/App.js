import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./components/NavBar";
// import Counter from "./components/Counter";

import Account from "./views/Account";
import Home from "./views/Home";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          {/* <Counter /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
