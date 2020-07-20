import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/booking" component={Booking} />
      </Switch>
    </div>
  );
}

export default App;

// To do list:
// 1. Layout all content
// 2. Apply CSS
// 3. Create booking Component
// 4. Clean up design
