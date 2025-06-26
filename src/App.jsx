import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import HaveAQuestion from './components/HaveAQuestion';
import Download from './components/Download';
import Footer from './components/Footer';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <HaveAQuestion />
    <Download />
    <Footer />
  </>
);

export default App;
