import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
                    <section className="footer">
          <div className="footer__links">
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
        </section>
        );
    }
}

export default Footer;