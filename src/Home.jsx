import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  
  const ChangePage = ()=>{
    navigate("/product");
  }

  return (
    <>
      <section id="hero">
        <div>Trade-in-offer</div>
        <h2>Super value deals</h2>
        <h3>On all products</h3>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>

      <section id="feature" className="section-p1 section-m1">
        <div className="feature-box">
          <img src="./img/features/f1.png" alt="featureimg" />
          <h3>Free Shipping</h3>
        </div>
        <div className="feature-box">
          <img src="./img/features/f2.png" alt="featureimg" />
          <h3>Online Order</h3>
        </div>
        <div className="feature-box">
          <img src="./img/features/f3.png" alt="featureimg" />
          <h3>Save Money</h3>
        </div>
        <div className="feature-box">
          <img src="./img/features/f4.png" alt="featureimg" />
          <h3>Promotions</h3>
        </div>
        <div className="feature-box">
          <img src="./img/features/f5.png" alt="featureimg" />
          <h3>Collaborations</h3>
        </div>
        <div className="feature-box">
          <img src="./img/features/f6.png" alt="featureimg" />
          <h3>24/7 Support</h3>
        </div>
      </section>

      <section id="product1" className="section-p1 section-m1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">

          <div className="pro-content" onClick={()=>ChangePage()}>

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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

          <div className="pro-content" onClick={()=>ChangePage()}>
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

      <section id="banner1" className="section-p1 section-m1" >
        <h3>Repair Services</h3>
        <h4>Up to <span>70% Off</span> - All T-Shirts & Accessories</h4>
        <button>Explore More</button>
      </section>

      <section id="product2" className="section-p1 section-m1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n1.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n2.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n3.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n4.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n5.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n6.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n7.jpg" alt="feature" />
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

          <div className="pro-content" onClick={()=>ChangePage()}>

            <img src="./img/products/n8.jpg" alt="feature" />
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

      <section id="banner2" className="section-p1">
        <div className="banner-box">
          <h3>crazy deals</h3>
          <h3>buy 1 get 1 free</h3>
          <span>the best classic dress is on sale at cara</span>
          <button>Learn more</button>
        </div>
        <div className="banner-box">
          <h3>spring/summer</h3>
          <h3>upcoming season</h3>
          <span>the best classic dress is on sale at cara</span>
          <button>Collection</button>
        </div>
      </section>

      <section id="text-banner">
        <div className="banner-box">
          <h2>Seasonal Sale</h2>
          <h3>Winter Collection -50% Off</h3>
        </div>
        <div className="banner-box">
          <h2>New Footwear Collection</h2>
          <h3>Spring/Summer 2022</h3>
        </div>
        <div className="banner-box">
          <h2>T-Shirts</h2>
          <h3>New Trendy Prints</h3>
        </div>
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

export default Home