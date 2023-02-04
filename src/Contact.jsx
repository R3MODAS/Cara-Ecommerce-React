import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Let's Talk</h2>
        <p>Leave a Message, We would love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>Get in Touch</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <ion-icon name="map-outline"></ion-icon>
              <p>56 Glassford Street Glasglow G1 1UL New York</p>
            </li>
            <li>
              <ion-icon name="mail-outline"></ion-icon>
              <p>contact@example.com</p>
            </li>
            <li>
              <ion-icon name="call"></ion-icon>
              <p>+91 1234567891</p>
            </li>
            <li>
              <ion-icon name="time-outline"></ion-icon>
              <p>Monday to Saturday: 9:00am to 4pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808802525497!2d-1.2565554840357314!3d51.75481970040316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1672237091474!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section id="form-details" className="reveal active">
        <form action="https://formspree.io/f/mpzeaeyv"
          method="POST">
          <span>Leave a message</span>
          <h2>We would love to hear from you</h2>
          <input type="text" placeholder="Your Name" name="Name" />
          <input type="text" placeholder="E-mail" name="E-mail" />
          <input type="text" placeholder="Subject" name="Subject" />
          <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="btn" type="submit">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="./img/people/1.png" alt="people" />
            <p><span>John Doe</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contact@example.com</p>
          </div>
          <div>
            <img src="./img/people/2.png" alt="people" />
            <p><span>William Smith</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contact@example.com</p>
          </div>
          <div>
            <img src="./img/people/3.png" alt="people" />
            <p><span>Emma Stone</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email: contact@example.com</p>
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
          <button>Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default Contact