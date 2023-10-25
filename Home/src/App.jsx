import React from "react";
import ReactDOM from "react-dom";
import Header from 'Header/Header';
import Footer from 'Header/Footer';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
  <Header/>
    <div style={{marginLeft:"8px"}}>
    <div>Name: Home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    </div>
  <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
