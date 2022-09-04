import styled from "styled-components";

export const WhyCrappoContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding-top: 8rem;
`;

export const Numbers = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .numbers__item {
    display: flex;
    gap: 1rem;

    @media screen and (min-width: 900px) {
      gap: 1.6rem;
    }
  }

  .numbers__item--image {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 900px) {
      width: 50px;
      height: 50px;
    }
  }

  .numbers__item--text {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h4 {
      font-size: ${(props) => props.theme.fontSize.xl};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.maintxt};
    }

    span {
      font-size: ${(props) => props.theme.fontSize.sm};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      color: ${(props) => props.theme.colors.secondarytxt};
    }

    @media screen and (min-width: 900px) {
      h4 {
        font-size: ${(props) => props.theme.fontSize.xxl};
      }
      span {
        font-size: ${(props) => props.theme.fontSize.md};
      }
    }
  }
`;

export const WhyCrappo = styled.div``
