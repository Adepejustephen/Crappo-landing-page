import styled from "styled-components";

export const TradeCryptoContainer = styled.section`
  background-color: ${(props) => props.theme.colors.maintxt};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25rem;
  padding-bottom: 8rem;

  /* align-items: center; */

  .content {
    display: flex;
    flex-direction: column;
    gap: 5.2rem;
    padding: 0 3.2rem;
    width: 100%;

    @media screen and (min-width: 600px) {
      padding: 0 5.6rem;
    }
    @media screen and (min-width: 1300px) {
      max-width: 120rem;
      width: 100%;
      margin: auto;
      padding: 0;
    }
  }

  .title {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.mainbg};
    text-align: center;
    line-height: 3rem;
    max-width: 60rem;
    margin: auto;

    @media screen and (min-width: 900px) {
     
        font-size: ${(props) => props.theme.fontSize.xxl};
        line-height: 4.8rem;
      
    }
  }
`;

export const Currencies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  flex-direction: column;

  .currency__box {
    padding: 4.8rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 1.6rem;
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.04);

    &:first-of-type {
      background-color: ${(props) => props.theme.colors.secondarybg};

      .currency__box--name {
        color: ${(props) => props.theme.colors.maintxt};
        span {
          opacity: 0.7;
          color: ${(props) => props.theme.colors.maintxt};
        }
      }
      .currency__box--text {
        color: ${(props) => props.theme.colors.maintxt};
      }
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 3rem;
  }

  .currency__box--name {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.mainbg};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: ${(props) => props.theme.fontSize.sm};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      color: #bdbdbd;
    }

    /* &:first-of-type {
      color: ${(props) => props.theme.colors.maintxt};

      span {
        opacity: 0.7;
      }
    } */
  }

  .currency__box--text {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: #828282;
    margin-bottom: 1rem;
  }

  .nobg__btn--icon {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;

    .currency__box {
      /* width: 37rem; */
      height: 360px;
    }
  }

  @media screen and (min-width: 900px) {
    .currency__box {
      width: 37rem;
    }

    .currency__box--name {
      font-size: ${(props) => props.theme.fontSize.xl};
      span {
        font-size: ${(props) => props.theme.fontSize.md};
      }
    }

    .currency__box--text {
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
`;
