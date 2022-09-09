import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CheckEarnings, Footer, Header, Hero, Market, Subscription, TradeCrypto, WhyCrappo } from './components';
import {  GlobalStyle } from './generalStyles/GlobalStyles';
import { Theme } from './generalStyles/themes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Header />
        <main>
          <Hero />
          <WhyCrappo />
          <CheckEarnings />
          <TradeCrypto />
          <Market />
          <Subscription/>
        </main>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
