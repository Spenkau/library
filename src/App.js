import React from "react";
import './index.scss'

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg />
          <div className="headerInfo">
            <h3>Book store</h3>
            <p>Reading is the best teaching</p>
            <p>Reading is the best teaching</p>
            <p>Reading is the best teaching</p>
            <p>Reading is the best teaching</p>
            <p>Reading is the best teaching</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>X BYN</span>
          </li>
          <li>
            <svg />
            <span></span>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
