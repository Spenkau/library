import React from "react";

function Cart() {
    return (
        <div className="drawerBlock">
          <h2>Cart <img width={35} height={35} className="removeBtn" src="/images/btn-x.svg"/></h2>
          
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
    );
}

export default Cart
