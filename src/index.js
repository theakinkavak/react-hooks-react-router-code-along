import React from "react"
import ReactDOM from "react-dom"
// Step 1. Import react-router functions
import { BrowserRouter as Router } from "react-router-dom"
import App from "./components/App"

// Step 3. Use <Router> component to wrap the entire app
// and provide React Router context features
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
