import React from "react";

function Cart({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawerBlock">
        <h2>
          Cart
          <img
            onClick={onClose}
            width={35}
            height={35}
            className="closeButton"
            src="/images/btn-x.svg"
            alt="Close cart"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="itemses">
              {items.map((obj) => (
                <div className="cartItem">
                  <img src={obj.imageUrl} className="cartItemImg" alt="Book" />
                  <div className="descriptionBlock">
                    <p>{obj.title}</p>
                    <strong>{obj.price} RUB</strong>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
        ) : (
          <div className="emptyCart">
            <img
              width={120}
              height={120}
              src="/images/sad_smile.svg"
              alt="No books"
            />
            <p>Ваша корзина пуста</p>
            <button onClick={onClose}>Вернуться в магазин</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
