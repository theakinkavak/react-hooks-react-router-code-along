import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    <div>
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
    </div>
  )
}

// Step 2. Use <Route> componenets to define client-side routes in our app
function App() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
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
