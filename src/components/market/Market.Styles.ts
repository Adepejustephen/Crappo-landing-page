import styled from "styled-components";

export const MarketContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondarybg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  gap: 10rem;

  .market__title {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.maintxt};
    line-height: 150%;
    text-align: center;
    max-width: 60rem;
  }

  .market__textContainer {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 40rem;
  }

  .market__imageContainer {
    height: 100%;
  }

  .market__imageContainer--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .market__textContainer--title {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.maintxt};
    line-height: 150%;
  }
  .market__textContainer--text {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: ${(props) => props.theme.colors.secondarytxt};
    line-height: 150%;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 600px) {
    .statistics__image {
      transform: translateX(-6rem);
    }
  }

  @media screen and (min-width: 900px) {
    .statistics__image {
      transform: translateX(-8rem);
    }
    .market__title {
      font-size: ${(props) => props.theme.fontSize.xxl};
    }
    .market__textContainer--title {
      font-size: ${(props) => props.theme.fontSize.xl};
    }
    .market__textContainer--text {
      font-size: ${(props) => props.theme.fontSize.md};
    }
  }
`;
