import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 8rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (min-width: 600px) {
    padding: 8rem 5.6rem;
    gap: 8rem;
  }
  @media screen and (min-width: 1300px) {
    padding: 8rem 0;
    max-width: 120rem;
    width: 100%;
    margin: auto;
    gap: 10rem;
  }
`;

export const FooterTop = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;

  .footer__logo {
    width: 13rem;
    height: 4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .footer__links {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
  }

  .footer__links--container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .footer__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .footer__links--title {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.maintxt};
  }

  .footer__list--item {
    color: #e0e0e0;
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.maintxt};
      transition: 0.3s;
    }
  }

  .footer__payments {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .footer___payments--title {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSize.lg};
    color: ${(props) => props.theme.colors.maintxt};
    line-height: 150%;
  }

  .footer__payments--images {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    img {
      width: 7rem;
      height: 5rem;
    }
  }

  @media screen and (min-width: 900px) {
    .footer__links--title {
      font-size: ${(props) => props.theme.fontSize.lg};
    }

    .footer__list--item {
      /* font-size: ${(props) => props.theme.fontSize.md}; */
      line-height: 3rem;
    }
    .footer___payments--title {
      font-size: ${(props) => props.theme.fontSize.xl};
    }

    .footer___payments--title {
      max-width: 32rem;
    }
  }
`;

export const FooterBottom = styled(motion.section)`
  display: flex;
  flex-direction: column-reverse;
  gap: 4rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footer__bottom--left {
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.maintxt};
  }

  .footer__bottom--right {
    display: flex;
    gap: 4rem;

    .footer__bottom--icon {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
`;
