import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/vehicle/:id" component={Home} />
    </Router>
  </React.StrictMode>
);
