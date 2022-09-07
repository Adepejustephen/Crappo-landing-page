import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CheckEarnings, Header, Hero, TradeCrypto, WhyCrappo } from './components';
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
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
