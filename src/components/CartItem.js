import React from "react";

function CartItem() {
  return (
    <div className="cartItem">
      <img src="images/book3.png" alt="Book" />
      <div className="descriptionBlock">
        <p>Карточка активации учебной программы "Правила дорожного движения"</p>
        <b>120 rub</b>
        <img
          width={25}
          height={25}
          className="removeBtn"
          src="/images/btn-remove.svg"
        />
      </div>
    </div>
  );
}

export default CartItem;
