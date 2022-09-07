import styled from "styled-components";

export const EearningContainer = styled.section`
  width: 100%;
  height: 73.12vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const EarningContents = styled.div`
  max-width: 942px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

export const EarningTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  h4 {
    font-size: ${(props) => props.theme.fontSize.xl};
    text-align: center;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.maintxt};
  }

  p {
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.secondarytxt};
    line-height: 2.2rem;
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    width: 60%;

    
  }
  @media screen and (min-width: 900px) {

    h4 {
      font-size: ${(props) => props.theme.fontSize.xxl};
    }

    p {
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
`;

export const RateCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fbfcfe;
  border-radius: 1.6rem;
  padding: 2.4rem;
  gap: 8rem;
  z-index: 3;
  margin-bottom: -38vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, .04);

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
  }
  .form__input,
  .form__select {
    border: none;
    outline: none;
    border-bottom: 1px solid #e0e0e0;
    color: ${(props) => props.theme.colors.secondarybg};
    font-size: ${(props) => props.theme.fontSize.sm};
    padding: 0.8rem 0;
    background: none;
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }

  .revenue {
    display: flex;
    flex-direction: column;
  }

  .revenue__head {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.btnbg};
  }

  .revenue__amount {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.colors.mainbg};
    line-height: 150%;
  }

  .revenue__smallText {
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: ${(props) => props.theme.fontSize.sm};
    color: #828282;
  }

  @media screen and (min-width: 600px) {
    padding: 4.8rem;
    margin-bottom: -52vh;

    .form {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 4.8rem;
    }

    .form__input {
      max-width: 40rem;
      width: 100%;
    }

    .form__select {
      max-width: 20rem;
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    .form__input,
    .form__select {
      font-size: ${(props) => props.theme.fontSize.md};
    }

    .revenue__head {
      font-size: ${(props) => props.theme.fontSize.md};
    }
    .revenue__amount {
      font-size: ${(props) => props.theme.fontSize.xxl};
    }
    .revenue__smallText {
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
`;

