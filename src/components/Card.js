import React from "react";

function Card() {
  return (
    <div className="card">
      <img src="/images/book3.png" width="150" height="auto" alt="" />
      <h5>
        Карточка активации учебной программы "Правила дорожного движения""
      </h5>
      <div className="cardAdd">
        <div className="cardPrice">
          <span>Price: </span>
          <b>120 rub.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/images/add.svg" alt="Add to cart" />
        </button>
        <div className="favorite">
          <img
            height={25}
            width={25}
            src="/images/heart.svg"
            alt="Add to favorite"
          />
        </div>
      </div>
    </div>
  );
}

export default Card
