import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <section className="section contact">
        <div className="container container-lg">
          <h2 className="title title--center">
            Fique ligado em nossas redes sociais.
          </h2>
          <p className="description description--center">
            Participe de nossos meios de comunicação.
          </p>
          <div className="contact__social">
            <a
              href="https://www.facebook.com/corthydicas"
              rel="noopener noreferrer"
              target="_blank"
              className="contact__social-icon"
            >
              <img
                src="images/contact/icon-facebook.png"
                alt="Facebok"
                title="Facebook"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCGNfkCXEIM8mSRM2hvr6rMg"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-icon"
            >
              <img
                src="images/contact/icon-youtube.png"
                alt="Youtube"
                title="Youtube"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;
