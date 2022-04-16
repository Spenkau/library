import React from "react";

function Cart({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawerBlock">
        <h2>
          Cart
          <img
          onClick={onClose}
            width={35}
            height={35}
            className="removeBtn"
            src="/images/btn-x.svg"
            alt="Close cart"
          />
        </h2>

        <div className="itemses">
          {items.map((obj) => (
            <div className="cartItem">
              <img src={obj.imageUrl}className="cartItemImg" alt="Book" />
              <div className="descriptionBlock">
                <p>{obj.title}</p>
                <strong>{obj.price} RUB</strong>
              </div>
              <img
                  width={30}
                  height={30}
                  className="removeBtn"
                  src="/images/btn-remove.svg"
                  alt="Your books"
                />
            </div>
          ))}
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
