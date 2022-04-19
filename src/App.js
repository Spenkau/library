import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://6257c564e4e0b7314280074d.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6257c564e4e0b7314280074d.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6257c564e4e0b7314280074d.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6257c564e4e0b7314280074d.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onDeleteItem = (id) => {
    axios.delete(`https://6257c564e4e0b7314280074d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id == obj.id)) {
        axios.delete(`https://6257c564e4e0b7314280074d.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://6257c564e4e0b7314280074d.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to the favorites')
    }

  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpened(false)}
          onRemove={onDeleteItem}
        />
      )}

      <Header onClickCart={() => setIsCartOpened(true)} />
      <hr/>


      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearch={onChangeSearch}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
