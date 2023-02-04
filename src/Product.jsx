import React from 'react'

const Product = () => {

    const change = () => {
        let MainImg = document.getElementById("MainImg");
        let SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = () => {
            MainImg.src = SmallImg[0].src
        }

        SmallImg[1].onclick = () => {
            MainImg.src = SmallImg[1].src
        }

        SmallImg[2].onclick = () => {
            MainImg.src = SmallImg[2].src
        }

        SmallImg[3].onclick = () => {
            MainImg.src = SmallImg[3].src
        }
    }

    return (

        <>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src="./img/products/f1.jpg" alt="image" width="100%" id="MainImg" />

                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src="./img/products/f1.jpg" alt="image" width="100%" className="small-img" onClick={change} />
                        </div>
                        <div className="small-img-col">
                            <img src="./img/products/f2.jpg" alt="image" width="100%" className="small-img" onClick={change} />
                        </div>
                        <div className="small-img-col">
                            <img src="./img/products/f3.jpg" alt="image" width="100%" className="small-img" onClick={change} />
                        </div>
                        <div className="small-img-col">
                            <img src="./img/products/f4.jpg" alt="image" width="100%" className="small-img" onClick={change} />
                        </div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h2>Home / T-Shirt</h2>
                    <h3>Men's Fashion T Shirt</h3>
                    <h4>$139.00</h4>
                    <select required>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <input type="number" value="1" autoComplete="off" min="1" readOnly/>
                    <button>Add to Cart</button>
                    <h4 className="detail">Product Details</h4>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quos facilis soluta dolor, praesentium quaerat corrupti, repellat, rem architecto voluptatum assumenda rerum eveniet animi culpa explicabo veniam ipsam? Libero adipisci natus velit voluptatem nemo, quas minima voluptatibus error aliquid tenetur animi asperiores eveniet neque minus tempora aspernatur maxime cum. Magni, voluptatem cumque aspernatur praesentium commodi id error asperiores dignissimos fugit cum ex, iure, modi tenetur atque quasi eveniet. Sed, tenetur!</span>
                </div>
            </section>

            <section id="product2" className="section-p1 section-m1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>

                <div className="pro-container">

                    <div className="pro-content">
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

                    <div className="pro-content">
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

                    <div className="pro-content">
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

                    <div className="pro-content">
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

export default Product