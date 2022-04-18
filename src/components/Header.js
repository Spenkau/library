import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="mb-40">
      <div className="headerLeft">
        <Link to="/">
          <img src="/images/logo.png" alt="book logo" />
        </Link>
        <div className="headerInfo">
          <h3>Book store</h3>
          <p>Reading is the best teaching</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerPrice">
          <img width={19} height={19} src="./images/basket.svg" alt="Basket" />
          <span>1250 rub</span>
        </li>
        <li className="marksPage">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="./images/heart.svg"
              alt="Bookmarks"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="./images/user.svg" alt="You" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
