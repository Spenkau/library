import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./index.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://6257c564e4e0b7314280074d.mockapi.io/items').then((res) => {
        setItems(res.data)
      })
    axios.get('https://6257c564e4e0b7314280074d.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
      })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6257c564e4e0b7314280074d.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj]);
  };

  const onDeleteItem = (id) => {
      axios.delete(`https://6257c564e4e0b7314280074d.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://6257c564e4e0b7314280074d.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Cart items={cartItems} onClose={() => setIsCartOpened(false)} onRemove={onDeleteItem} />
      )}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <hr />
      <div className="content">
        <div className="middleHeader">
          <h1>{searchValue ? `Guest pose: "${searchValue}"` : "All books"}</h1>
          <div className="searchBlock">
            <img width={18} height={18} src="/images/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clearSearch"
                src="/images/btn-x.svg"
                alt="Clear"
              />
            )}{" "}
            <input
              maxLength={30}
              onChange={onChangeSearch}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="books">
          {items.map((item) => (
              <Card
                key={item.title}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={onAddToFavorite}
                onPlus={onAddToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
