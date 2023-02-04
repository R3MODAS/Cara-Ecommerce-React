import React from 'react'

const Shop = () => {
  return (
    <>
      <section id="page-header">
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <section id="product1" className="section-p1 section-m1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">

          <div className="pro-content">

            <img src="./img/products/f1.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f2.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f3.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f4.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f5.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f6.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f7.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>

          <div className="pro-content">
            <img src="./img/products/f8.jpg" alt="feature" />
            <div className="desc">
              <span>Adidas</span>
              <p>Cartoon Astronaut T-Shirts</p>
              <div className="stars">
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
                <ion-icon name="star" class="star"></ion-icon>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/"><ion-icon name="cart-outline" class="cart"></ion-icon></a>
          </div>


        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/"><ion-icon name="arrow-forward-outline"></ion-icon></a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="news-text">
          <h3>Sign up for newsletter</h3>
          <p>get email updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>

  )
}

export default Shop