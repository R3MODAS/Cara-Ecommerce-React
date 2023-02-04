import React from 'react'

const About = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Know More About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>

      <section id="about-head" className="section-p1 section-m1">
        <img src="./img/about/a6.jpg" alt="about" />
        <div>
          <h2>Who are we?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsam explicabo fugit expedita!
            Ducimus repellendus officia commodi exercitationem veritatis voluptates eveniet laboriosam odio, est
            quia consectetur tempore voluptatem, sit ea ut voluptas distinctio quis similique amet assumenda maiores aliquid. Consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat perspiciatis vero. Ab iure, amet labore ipsam fugit eligendi odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro perspiciatis, provident delectus rem vitae non aliquid sequi, corporis, quae voluptatum. Pariatur distinctio repellat facere rerum quia modi eius error!</p>

          <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti officia eaque? In sunt doloribus, blanditiis debitis commodi nemo repellat.</abbr>

          <br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem, corrupti?</marquee>

        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>Download our <a href="/">App</a></h1>
        <div className="video">
          <video src="./img/about/1.mp4" autoPlay muted loop></video>
        </div>
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

export default About