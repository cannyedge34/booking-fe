import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Bookings } from "./Bookings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bookings Example App</h2>
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Route exact path="/" component={Bookings} />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
