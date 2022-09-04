import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Hero, WhyCrappo } from './components';
import { AppContainer, GlobalStyle } from './generalStyles/GrlobalStyles';
import { Theme } from './generalStyles/themes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Header />
        <AppContainer>
          <Hero />
          <WhyCrappo/>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
