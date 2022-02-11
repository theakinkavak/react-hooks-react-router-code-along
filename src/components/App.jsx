import React from "react"
import { Route, Switch } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"

// Step 2. Use <Route> components to define client-side routes in our app
// Step 4. Switch component will only render the first route that matches any part of the URL
export default function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }