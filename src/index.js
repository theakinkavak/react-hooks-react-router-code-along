import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return (
    <Switch>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </Switch>
  )
}

// Step 2. Use <Route> components to define client-side routes in our app
function App() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
// Step 3. Use <Router> component to wrap the entire app
// and provide React Router context features
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
