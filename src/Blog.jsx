import React from 'react'

const Blog = () => {
  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#ReadMore</h2>
        <p>Read all the case studies about our Products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="./img/blog/b1.jpg" alt="blogimg" />
          </div>
          <div className="blog-details">
            <h2>The Cotton-Jersey Zip-up Hoodie</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at minus eveniet dolorum sapiente voluptatem laudantium, dolores amet eum nihil.</p>
            <a href="/">Continue Reading</a>
          </div>
          <h3>13/01</h3>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="./img/blog/b2.jpg" alt="blogimg" />
          </div>
          <div className="blog-details">
            <h2>How to Style a Quiff</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at minus eveniet dolorum sapiente voluptatem laudantium, dolores amet eum nihil.</p>
            <a href="/">Continue Reading</a>
          </div>
          <h3>13/04</h3>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="./img/blog/b3.jpg" alt="blogimg" />
          </div>
          <div className="blog-details">
            <h2>Must-have Skater Girl Items</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at minus eveniet dolorum sapiente voluptatem laudantium, dolores amet eum nihil.</p>
            <a href="/">Continue Reading</a>
          </div>
          <h3>12/01</h3>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="./img/blog/b4.jpg" alt="blogimg" />
          </div>
          <div className="blog-details">
            <h2>Runway-Inspired Trends</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at minus eveniet dolorum sapiente voluptatem laudantium, dolores amet eum nihil.</p>
            <a href="/">Continue Reading</a>
          </div>
          <h3>10/03</h3>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="./img/blog/b6.jpg" alt="blogimg" />
          </div>
          <div className="blog-details">
            <h2>AW20 MensWear Trends</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at minus eveniet dolorum sapiente voluptatem laudantium, dolores amet eum nihil.</p>
            <a href="/">Continue Reading</a>
          </div>
          <h3>13/01</h3>
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
            <input type="text" placeholder="Your Email Address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>

    </>
  )
}

export default Blog