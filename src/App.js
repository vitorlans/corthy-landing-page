import React, { Component } from 'react';
import Features from './components/features';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="section about">
          <div className="container container-xl about__grid">
            <div className="about__column">
              <h2 className="title">Conheça nossa ferramenta</h2>
              <div className="description">
                <p>
                  Corthy é o aplicativo perfeito para gerenciamento do seu salão
                  de beleza, barbearia, estúdio de tatuagem e clínica estética.
                </p>
                <br />
                <p>
                  Tenha em mãos uma ferramenta incrível que vai organizar o seu
                  negócio, fornecendo inteligência para melhorar a comunicação
                  com o seu cliente aumentando o lucro da empresa.
                </p>
                <br />
                <p>
                  Veja nosso vídeo explicativo e entenda um pouco do que podemos
                  fazer por você.
                </p>
              </div>
            </div>
            <div className="about__column">
            <iframe className="embed-responsive embed-responsive-16by9" src="https://www.youtube.com/embed/J1mnZchxJQ4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </section>
        <Features />

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
        <section className="footer">
          <div className="footer__links">
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
        </section>
        <div>
          <a
            className="whatsapp-chat"
            href="https://api.whatsapp.com/send?phone=5516982511992&amp;text=Olá, estou acessando o site do Corthy e preciso de ajuda."
            target="_blank"
          >
            <img
              className="pulse"
              title="Contato via Whatsapp"
              src="images/contact/whatsapp-support.png"
              style={{ borderRadius: 5 }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
