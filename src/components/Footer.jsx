import React from 'react'

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src="./img/logo.png" alt="logo"/>
            <h3>Contact</h3>
            <p><strong>Address: </strong>562 Wellington Road, Street 32, San Fransisco</p>
            <p><strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h3>Follow us</h3>
                <div className="icon">
                    <ion-icon name="logo-facebook" class="icons"></ion-icon>
                    <ion-icon name="logo-twitter" class="icons"></ion-icon>
                    <ion-icon name="logo-instagram" class="icons"></ion-icon>
                    <ion-icon name="logo-pinterest" class="icons"></ion-icon>
                    <ion-icon name="logo-youtube" class="icons"></ion-icon>
                </div>
            </div>
        </div>

        <div className="col">
            <h3>About</h3>
            <div className="links">
                <a href="/">About us</a>
                <a href="/">Delivery Information</a>
                <a href="/">Privacy policy</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Contact us</a>
            </div>
        </div>

        <div className="col">
            <h3>My Account</h3>
            <div className="links">
                <a href="/">Sign In</a>
                <a href="/">View Cart</a>
                <a href="/">My Wishlist</a>
                <a href="/">Track my Order</a>
                <a href="/">Help</a>
            </div>
        </div>

        <div className="col">
            <h3>Install App</h3>
            <p>From App Store or Google Play</p>
            <div className="store">
                <img src="./img/pay/app.jpg" alt="appstore"/>
                <img src="./img/pay/play.jpg" alt="appstore"/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="./img/pay/pay.png" alt="payment"/>
        </div>

        <div className="copyright">
            <p>&copy;2022, Sharadindu Das - Cara Ecommerce Website</p>
        </div>

    </footer>
  )
}

export default Footer