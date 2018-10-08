import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section
        className="header"
        style={{
          backgroundImage: "url('images/header/pattern-background.jpg')"
        }}
      >
        <div
          className="container container-lg header__container"
          style={{
            backgroundImage: "url('images/header/hand-placeholder.png')"
          }}
        >
          <div className="header__content">
            <h3 className="header__description" style={{ color: 'black' }}>
              Gestão completa de Salão e Barbearia
            </h3>
            <div className="header__downloads">
              <a
                className="download"
                href="https://play.google.com/store/apps/details?id=com.corthy.management"
              >
                <img
                  className="download_image"
                  alt="Disponível no Google Play"
                  src="https://play.google.com/intl/en_us/badges/images/generic/pt-br_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
