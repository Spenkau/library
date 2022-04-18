import React, { useState } from "react";

function Card({ title, imageUrl, price, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <img src={imageUrl} width="150" height="auto" alt="" />
      <h5>{title}</h5>
      <div className="cardAdd">
        <div className="cardPrice">
          <span>Price: </span>
          <b>{price}</b>
        </div>
        <img
          className="plus"
          onClick={onClickPlus}
          width={20}
          height={20}
          src={isAdded ? "/images/btn-checked.svg" : "/images/add.svg"}
          alt="Add to cart"
        />
        <div className="favorite" onClick={onClickFavorite}>
          <img
            src={isFavorite ? "/images/like.png" : "/images/unliked.png"}
            alt="Add to favorite"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
