import React from "react";

function Card(props) {

  const onClickButton = () => {
    alert("Добавлено в корзину")
  }

  return (
    <div className="card">
      <img src={props.imageUrl} width="150" height="auto" alt="" />
      <h5>
        {props.title}
      </h5>
      <div className="cardAdd">
        <div className="cardPrice">
          <span>Price: </span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={onClickButton}>
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
