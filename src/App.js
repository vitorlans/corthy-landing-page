import React, { Component } from 'react';
import Features from './components/features';
import Header from './components/header';
import Video from './components/video';
import Social from './components/social';
import Footer from './components/footer';
import WhatsAppSupport from './components/whatsAppSupport';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Video />
        <Features />
        <Social />
        <Footer />
        <WhatsAppSupport />
      </div>
    );
  }
}

export default App;
