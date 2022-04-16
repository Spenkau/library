import React, { useState, useEffect } from "react";
import "./index.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://6257c564e4e0b7314280074d.mockapi.io/items')
      .then((res) => {
        return res.json();
      }) 
      .then ((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {isCartOpened && <Cart items={cartItems} onClose={() => setIsCartOpened(false)} />}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <hr />
      <div className="content">
        <div className="middleHeader">
          <h1>All books</h1>
          <div className="searchBlock">
            <img width={18} height={18} src="/images/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="books">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={onAddToCart}
              onFavorite={() => console.log("В избранное нажата")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
