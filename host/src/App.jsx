import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import PizzaDisplay from "MF_dashboard/PizzaDisplay";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <PizzaDisplay />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
