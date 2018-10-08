import React, { Component } from 'react';

class whatsAppSupport extends Component {
  render() {
    return (
      <div>
        <a
          className="whatsapp-chat"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5516982511992&amp;text=Olá, estou acessando o site do Corthy e preciso de ajuda."
          target="_blank"
        >
          <img
            className="pulse"
            alt="Contato via Whatsapp"
            title="Contato via Whatsapp"
            src="images/contact/whatsapp-support.png"
            style={{ borderRadius: 5 }}
          />
        </a>
      </div>
    );
  }
}

export default whatsAppSupport;
