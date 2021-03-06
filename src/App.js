import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

import "./sass/app.scss";

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
