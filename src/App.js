import React from "react";
import "./index.scss";
import Card from "./components/Card";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Cart from "./components/Cart";

const books = [
  {
    name: "Справочник правил дорожного движения",
    price: 19.99,
    imageUrl: "./images/book3.png",
  },
  {
    name: 'Александр Пушкин "Капитанская дочка"',
    price: 21,
    imageUrl: "./images/book1.png",
  },
  {
    name: 'Александр Блок "Сборник стихов"',
    price: 15.99,
    imageUrl: "./images/book2.png",
  },
];

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <Cart />
      </div>
      <Header />

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
          {books.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
