import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
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
                negócio, fornecendo inteligência para melhorar a comunicação com
                o seu cliente aumentando o lucro da empresa.
              </p>
              <br />
              <p>
                Veja nosso vídeo explicativo e entenda um pouco do que podemos
                fazer por você.
              </p>
            </div>
          </div>
          <div className="about__column">
            <iframe
              title="corthy-promo"
              className="embed-responsive embed-responsive-16by9"
              src="https://www.youtube.com/embed/J1mnZchxJQ4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
