import styled from "styled-components";

export const SubscriptionContainer = styled.section`
  width: 100%;
  background: linear-gradient(180deg, #2b076e 0%, #0d0d2b 100%);
  padding: 8rem 0;
  /* z-index: 5; */

  .SubscribeBox {
    padding: 4.8rem;
    background-color: ${(props) => props.theme.colors.btnbg};
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    position: relative;
  }

  .subscribe__cubic {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  .subscribe__bitcoin {
    position: absolute;
    bottom: -1rem;
    right: 1.5rem;
    object-fit: contain;
    display: none;
  }

  .subscribeBox__left {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .subscribeBox__left--title {
    color: ${(props) => props.theme.colors.maintxt};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  .subscribeBox__left--text {
    color: ${(props) => props.theme.colors.maintxt};
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    line-height: 2.2rem;
  }
  .subscribeBox__form {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  .subscribeBox__form--input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.maintxt};
    line-height: 2.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media screen and (min-width: 600px) {
    .SubscribeBox {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .subscribeBox__form {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
  }

  @media screen and (min-width: 900px) {
    .subscribeBox__left--title {
      font-size: ${(props) => props.theme.fontSize.xl};
    }
    .subscribeBox__left--text {
      font-size: ${(props) => props.theme.fontSize.md};
      line-height: 2.8rem;
      max-width: 34rem;
    }

    .subscribeBox__form--input {
      font-size: ${(props) => props.theme.fontSize.md};
      line-height: 2.8rem;
      width: 34rem;
    }

    .subscribe__cubic {
      display: flex;
    }
    .subscribe__bitcoin {
      display: flex;
    }
  }
`;
