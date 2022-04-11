import React from "react";
function Header(props) {
    return (
        <header className="mb-40">
        <div className="headerLeft">
          <img src="/images/logo.png" />
          <div className="headerInfo">
            <h3>Book store</h3>
            <p>Reading is the best teaching</p>
          </div>
        </div>
        <ul className="headerRight">
          <li onClick={props.onClickCart} className="headerPrice">
            <img width={19} height={19} src="./images/basket.svg" />
            <span>1250 rub.</span>
          </li>
          <li>
          <img width={18} height={18} src="./images/user.svg" />
          </li>
        </ul>
      </header>
    );
}

export default Header
