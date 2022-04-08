import React from "react";
import './index.scss'
import Card from './components/Card'
import CartItem from './components/CartItem'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: 'none' }} className="overlay">
        <Cart />
      </div>

      <Header />
      
      <hr/>
      <div className="content">
        <div className="middleHeader">
          <h1>All books</h1>
          <div className="searchBlock">
            <img width={18} height={18} src="/images/search.svg" alt="Search" />
            <input placeholder="Search..."/>
          </div>
        </div>  
        <div className="books">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
