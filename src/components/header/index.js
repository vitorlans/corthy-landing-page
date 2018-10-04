import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="container container-lg header__container">
          <div className="header__content">
            {/* <div  className="header__logo">
              <a>
                <img className="header__logo_image" src="images/header/logo.png" />
              </a>
            </div> */}
            <h3 className="header__description" style={{ color: 'black' }}>
              Gestão completa de Salão e Barbearia
            </h3>
            <div className="header__downloads">
              <a
                className="header__download"
                href="https://play.google.com/store/apps/details?id=com.corthy.management"
              >
                <img
                  className="header__download_image"
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
