import React from 'react'

const Cart = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Cart</h2>
        <p>Add your coupon code & Save upto 70%!</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/"><ion-icon name="close-circle-outline"></ion-icon></a></td>
              <td><img src="./img/products/f2.jpg" alt="img" /></td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td><input type="number" value="1" min="1" readOnly/></td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td><a href="/"><ion-icon name="close-circle-outline"></ion-icon></a></td>
              <td><img src="./img/products/f3.jpg" alt="img" /></td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td><input type="number" value="1" min="1" readOnly/></td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td><a href="/"><ion-icon name="close-circle-outline"></ion-icon></a></td>
              <td><img src="./img/products/f1.jpg" alt="img" /></td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td><input type="number" value="1" min="1" readOnly/></td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your Coupon" />
            <button className="btn">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$335</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>

            <tr>
              <td><strong>Total</strong></td>
              <td><strong>$335</strong></td>
            </tr>
          </table>
          <button className="btn">Proceed to checkout</button>
        </div>
      </section>
    </>
  )
}

export default Cart