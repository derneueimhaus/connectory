import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./components/NavBar";

import Settings from "./views/Settings";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Signup from "./views/Signup";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/settings" component={Settings} />
            <Route path="/profile/:userId" component={Profile} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
