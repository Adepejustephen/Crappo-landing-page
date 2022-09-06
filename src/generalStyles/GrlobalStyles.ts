import styled, { createGlobalStyle } from "styled-components";

interface Direction {
  reverse?: boolean;
}

export const Container = styled.div<Direction>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  align-items: center;
  gap: 4rem;

  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    gap: 5.64rem;
  }
  @media screen and (min-width: 900px) {
    gap: 15.4rem;
  }
`;

export const AppContainer = styled.main`
  width: 100%;
  max-width: 120rem;
  padding: 0 3.2rem;



  @media screen and (min-width: 600px) {
  
  padding: 0 5.6rem;

  }
  @media screen and (min-width: 1300px) {
    max-width: 120rem;
    width: 100%;
    margin: auto;
    padding: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    font-size: 10px;
}
  body {
  font-family: 'Rubik';
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainbg};
  position: relative;
  }

  ul{
    list-style: none ;
  }

  a{
    text-decoration: none;
  }
`;
