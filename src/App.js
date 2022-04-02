import React from "react";
import './index.scss'

function App() {
  return (
    <div className="wrapper">
      <header className="mb-40">
        <div className="headerLeft">
          <img src="/images/logo.png" />
          <div className="headerInfo">
            <h3>Book store</h3>
            <p>Reading is the best teaching</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="headerPrice">
            <img width={19} height={19} src="./images/basket.svg" />
            <span>1250 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="./images/user.svg" />
          </li>
        </ul>
      </header>
      <hr noshade/>
      <div className="content">
        <h1 className="pb">Published books</h1>
        <div className="books">
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения""</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>120 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения""</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>120 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения""</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>120 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения""</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Цена: </span>
                <b>120 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
