import { useState } from "react";
import "./App.scss";
import screenshot1 from "./assets/images/homescreen.png";
import screenshot2 from "./assets/images/rev-screenshot-2.png";

function App() {
  return (
    <div className="body">
      <img className="image__top" src={screenshot1} alt="" />
      <div className="carousel">
        <p className="test">Test wrapper</p>
      </div>
      {/* <img className="image__bottom" src={screenshot2} alt="" /> */}
    </div>
  );
}

export default App;
