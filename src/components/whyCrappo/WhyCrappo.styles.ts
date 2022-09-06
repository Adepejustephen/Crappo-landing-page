import styled from "styled-components";

export const WhyCrappoContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 8rem 0;
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

export const WhyCrappoMain = styled.div`
  .whyCrappo__left {
   
    .whyCrappo__left--image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .whyCrappo__right {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    

    .whyCrappo__right--heading {
      font-size: ${(props) => props.theme.fontSize.xl};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.maintxt};
      line-height: 3.2rem;
    }

    .whyCrappo__right--subText {
      font-size: ${(props) => props.theme.fontSize.sm};
      font-weight: ${(props) => props.theme.fontWeights.normal};
      color: ${(props) => props.theme.colors.secondarytxt};

      line-height: 2.2rem;
    }

    @media screen and (min-width: 900px) {
      .whyCrappo__right--heading {
        font-size: ${(props) => props.theme.fontSize.xxl};

        max-width: 45rem;
        line-height: 4.8rem;
      }
      .whyCrappo__right--subText {
        font-size: ${(props) => props.theme.fontSize.md};
        max-width: 45rem;
        line-height: 2.8rem;
      }
    }
  }
`;
