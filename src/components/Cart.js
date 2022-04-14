import React, { useState } from "react";

function Cart({ onHide, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawerBlock">
        <h2>
          Cart
          <img
            onClick={onHide}
            width={35}
            height={35}
            className="removeBtn"
            src="/images/btn-x.svg"
            alt="Close cart"
          />
        </h2>

        <div className="items">
          {items.map((obj) => {
            <div className="cartItem">
              <img src={obj.imageUrl} alt="Book" />
              <div className="descriptionBlock">
                <p>{obj.title}</p>
                <b>{obj.price} rub</b>
                <img
                  width={25}
                  height={25}
                  className="removeBtn"
                  src="/images/btn-remove.svg"
                />
              </div>
            </div>;
          })}
        </div>

        <div className="cartTotalBlock">
          <table className="priceCount" cellPadding={4}>
            <tbody>
              <tr>
                <td>Total:</td>
                <th>256 rub</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Tax %:</td>
                <th>16 rub</th>
              </tr>
            </tbody>
          </table>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
