import React, { Component } from 'react';
import {Phone} from 'react-landing-page'

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="container container-lg header__container">
          <div className="header__content">
            <h1 className="header__title">Corthy</h1>
            <h3 className="header__description">
              Gestão completa do seu Salão de Beleza e Barbearia
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
