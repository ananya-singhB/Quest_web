import "./App.css";
import "../src/components/login/authStyles.css";
import "../src/components/Navbar.css";
import React, { useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Nav";
import Quest from "./components/Quest";
import { Login } from "./components/login/login";
import { Register } from "./components/login/register";
import Profile from "./components/home/profile";
import QnA from "./components/home/qna";
import Notification from "./components/home/notification";
import Category from "./components/home/category";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Dash} from './components/inComp/dashboard.js';
import Feed from "./components/inComp/Feed";
import Post from './components/inComp/Post';

function App() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div className="App">
      <Router>
        <Auth.Provider value={{ authorized, setAuthorized }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Quest} />
            <Route path="/Quest" component={Quest} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/Contact" component={Contact} />

            <Route path="/qna" component={QnA} />
            <Route path="/category" component={Category} />
            <Route path="/notification" component={Notification} />
            <Route path="/profile" component={Profile} />


            {/* <Route path="/dashboard" component={Dash} /> */}
          </Switch>
        </Auth.Provider>
      </Router>
    </div>
  );
}

export default App;
