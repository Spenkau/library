import styles from "./Card.module.scss";
import React, { useState } from "react";

console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const handlePlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <img src={props.imageUrl} width="150" height="auto" alt="" />
      <h5>{props.title}</h5>
      <div className="cardAdd">
        <div className="cardPrice">
          <span>Price: </span>
          <b>{props.price}</b>
        </div>
        <img
          className="plus"
          onClick={handlePlus}
          width={20}
          height={20}
          src={isAdded ? "/images/btn-checked.svg" : "/images/add.svg"}
          alt="Add to cart"
        />
        <div className="favorite" onClick={props.onFavorite}>
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

export default Card;
