import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  position: relative;
  @media screen and (min-width: 600px) {
    padding-top: 0rem;
  }

  .hero__shape--one {
    position: absolute;
    left: 0;
    bottom: -20rem;
    z-index: -1;
    display: none;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .hero__shape--two {
    position: absolute;
    right: -35%;
    bottom: 0;
    z-index: -1;
    object-fit: contain;
    display: none;
    width: 100%;
    height: 100%;
    
  }
  @media screen and (min-width: 1200px) {
    .hero__shape--one {
      display: block;
    }
    .hero__shape--two {
      display: block;
    }
  }

  .hero__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.8rem;
    flex: 1;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
      margin-bottom: 0rem;
    }

    .hero__left--topText {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3.2rem;
      color: ${(props) => props.theme.colors.maintxt};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      font-size: 1.3rem;
      padding-right: 0.8rem;
      width: max-content;

      @media screen and (min-width: 600px) {
        font-size: ${(props) => props.theme.fontSize.md};
        padding-right: 1rem;
        gap: 1.5rem;
      }

      span {
        border-radius: 3.2rem;
        background: #fff;
        color: ${(props) => props.theme.colors.mainbg};
        font-weight: ${(props) => props.theme.fontWeights.semibold};
        padding: 0.8rem;

        @media screen and (min-width: 600px) {
          padding: 1rem;
        }
      }
    }

    .hero__left--header {
      color: ${(props) => props.theme.colors.maintxt};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSize.xl};

      @media screen and (min-width: 600px) {
        font-size: ${(props) => props.theme.fontSize.xxl};
      }
      @media screen and (min-width: 900px) {
        font-size: ${(props) => props.theme.fontSize.xxxl};
      }
    }
    .hero__left--smallText {
      color: ${(props) => props.theme.colors.secondarytxt};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      font-size: ${(props) => props.theme.fontSize.sm};
      line-height: 2.4rem;
      margin-bottom: 1rem;

      @media screen and (min-width: 900px) {
        font-size: ${(props) => props.theme.fontSize.md};
        line-height: 2.8rem;
        max-width: 40rem;
      }
    }
  }

  .hero__right {
    flex: 1;
    width: 100%;
    height: 100%;

    .hero__right--image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
