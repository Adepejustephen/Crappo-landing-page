import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CheckEarnings, Header, Hero, Market, TradeCrypto, WhyCrappo } from './components';
import {  GlobalStyle } from './generalStyles/GrlobalStyles';
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
          <Market/>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
