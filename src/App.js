import React, { Component } from 'react';
import Features from './components/features';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <section className="section about">
          <div className="container container-xl about__grid">
            <div className="about__column">
              <h2 className="title">Whats Craze all About?</h2>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse fringilla fringilla nisl congue congue. Maecenas
                  nec condimentum libero, at elementum mauris.
                </p>
                <br />
                Phasellus eget nisi dapibus, ultricies nisl at, hendrerit
                risusuis ornare luctus id sollicitudin ante lobortis at.
                <ul className="description__list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet consectetur elt</li>
                </ul>
              </div>
            </div>
            <div className="about__column">
              <iframe
                className="about__video"
                src="https://player.vimeo.com/video/20385982?title=0&byline=0&portrait=0"
                width="100%"
                height="100%"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </div>
          </div>
        </section>
        <section className="section testimonials" js-slider>
          <div className="testimonials__holder" js-slider-holder>
            <div className="testimonials__item" js-slider-item>
              <div className="container container-md">
                “Craze is one of the most complete app packages I have ever come
                across. I would highly reccomend it to anyone!”
                <span className="testimonials__author">Sarah Hunt</span>
              </div>
            </div>
            <div className="testimonials__item" js-slider-item>
              <div className="container container-md">
                “Craze is one of the most complete app packages I have ever come
                across. I would highly reccomend it to anyone!”
                <span className="testimonials__author">Sarah Hunt</span>
              </div>
            </div>
            <div className="testimonials__item" js-slider-item>
              <div className="container container-md">
                “Craze is one of the most complete app packages I have ever come
                across. I would highly reccomend it to anyone!”
                <span className="testimonials__author">Sarah Hunt</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section pricing">
          <div className="container container-lg">
            <h2 className="title title--center">Pricing Plans</h2>
            <p className="features__description description description--center">
              Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure
              accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui
              cu aliquid nominavi. Est habemus maiestatis ut. Vim quod elitr.
            </p>
          </div>
          <div className="container container-xl">
            <div className="pricing__grid">
              <div className="pricing__column">
                <div className="pricing__table-line pricing__table-line--blue">
                  Basic
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__value">
                  $ 19
                  <span className="pricing__cents">99</span>
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 1
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 2
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 3
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 4
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__table-line--no-line">
                  Feature 5
                </div>
                <div className="pricing__table-line pricing__table-line--blue">
                  <a className="pricing__table-buttom">PURCHASE</a>
                </div>
              </div>
              <div className="pricing__column">
                <div className="pricing__table-line pricing__table-line--blue">
                  Standard
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__value">
                  $ 39
                  <span className="pricing__cents">99</span>
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 1
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 2
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 3
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 4
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__table-line--no-line">
                  Feature 5
                </div>
                <div className="pricing__table-line pricing__table-line--blue">
                  <a className="pricing__table-buttom">PURCHASE</a>
                </div>
              </div>
              <div className="pricing__column">
                <div className="pricing__table-line pricing__table-line--blue">
                  Deluxe
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__value">
                  $ 59
                  <span className="pricing__cents">99</span>
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 1
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 2
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 3
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 4
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 5
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__table-line--no-line">
                  Feature 6
                </div>
                <div className="pricing__table-line pricing__table-line--blue">
                  <a className="pricing__table-buttom">PURCHASE</a>
                </div>
              </div>
              <div className="pricing__column">
                <div className="pricing__table-line pricing__table-line--blue">
                  Unlimited
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__value">
                  $ 79
                  <span className="pricing__cents">99</span>
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 1
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 2
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 3
                </div>
                <div className="pricing__table-line pricing__table-line--white">
                  Feature 4
                </div>
                <div className="pricing__table-line pricing__table-line--white pricing__table-line--no-line">
                  Feature 5
                </div>
                <div className="pricing__table-line pricing__table-line--blue">
                  <a className="pricing__table-buttom">PURCHASE</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section contact">
          <div className="container container-lg">
            <h2 className="title title--center">Say Hi & Get in Touch</h2>
            <p className="description description--center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </p>
            <div className="contact__social">
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-twitter.png"
                  alt="@twitter"
                  title="@twitter"
                />
              </a>
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-facebook.png"
                  alt="Facebok"
                  title="Facebook"
                />
              </a>
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-pinterest.png"
                  alt="Pinterest"
                  title="Pinterest"
                />
              </a>
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-google-plus.png"
                  alt="G+"
                  title="G+"
                />
              </a>
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-linkedin.png"
                  alt="Linkedin"
                  title="Linkedin"
                />
              </a>
              <a className="contact__social-icon">
                <img
                  src="images/contact/icon-youtube.png"
                  alt="Youtube"
                  title="Youtube"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="footer__links">
            <a className="footer__link">Contact</a>
            <a className="footer__link">Download</a>
            <a className="footer__link">Press</a>
            <a className="footer__link">Email</a>
            <a className="footer__link">Support</a>
            <a className="footer__link">Privacy Policy</a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
