import React from "react";
import './index.scss'

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawerBlock">
          <h2>Cart</h2>

          

          <div className="cartItem">
            <img src="images/book3.png" alt="Book" />
            <div className="descriptionBlock">
              <p>Карточка активации учебной программы "Правила дорожного движения"</p>
              <b>120 rub</b>
            </div>
            <img className="removeBtn" src="/images/btn-remove.svg"/>
          </div>
          <div className="cartItem">
            <img src="images/book3.png" alt="Book" />
            <div className="descriptionBlock">
              <p>Карточка активации учебной программы "Правила дорожного движения"</p>
              <b>120 rub</b>
            </div>
            <img className="removeBtn" src="/images/btn-remove.svg"/>
          </div>
            <ul className="cartTotalBlock">
              <table className="priceCount" cellPadding={4}>
                <tbody>
                  <tr>
                    <td>Итого:</td>
                    <th>256 rub</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Налог%:</td>
                    <th>16 rub</th>
                  </tr>
                </tbody>
              </table>
            </ul>
        </div>
      </div>

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
            <span>1250 rub.</span>
          </li>
          <li>
          <img width={18} height={18} src="./images/user.svg" />
          </li>
        </ul>
      </header>
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
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения"</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Price: </span>
                <b>120 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add to cart"/>
              </button>
              <div className="favorite">
                <img height={25} width={25} src="/images/heart.svg" alt="Add to favorite"/>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/images/book3.png" width="150" height="auto" alt="" />
            <h5>Карточка активации учебной программы "Правила дорожного движения""</h5>
            <div className="cardAdd">
              <div className="cardPrice">
                <span>Price: </span>
                <b>120 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/add.svg" alt="Add to cart"/>
              </button>
              <div className="favorite">
                <img height={25} width={25} src="/images/heart.svg" alt="Add to favorite"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
