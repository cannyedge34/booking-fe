import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Bookings } from "./Bookings";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h2>Bookings Example App</h2>
      </header>
      <div className="app__body">
        <BrowserRouter>
          <Route exact path="/" component={Bookings} />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
