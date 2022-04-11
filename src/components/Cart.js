import React, { useState } from "react";

function Cart(props) {

    return (
      <div className="overlay">
        <div className="drawerBlock">
          <h2>Cart <img onClick={props.onHide} width={35} height={35} className="removeBtn" src="/images/btn-x.svg" alt="Close cart"/></h2>
          
          <div className="items">
            
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

export default Cart
