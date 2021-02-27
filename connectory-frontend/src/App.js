import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./components/NavBar";

import Settings from "./views/Settings";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Signup from "./views/Signup";
import NewTestimonial from "./views/NewTestimonial";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <div className="navbar-dodger"></div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/settings/:userId" component={Settings} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/new-testimonial/:userId" component={NewTestimonial} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
