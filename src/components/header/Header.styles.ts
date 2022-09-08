import styled from "styled-components";

type NavOpen = {
    openNav: boolean;
}


export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  /* align-items: center; */
  height: 8rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.mainbg};


  .logo {
    width: 13.5rem;
    height: 4rem;

    .logo__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .header__content {
   
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 3.2rem;
    position: relative;
    align-items: center;

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

`;

export const Togglebtn = styled.div<NavOpen>`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  width: 2.5rem;
  cursor: pointer;
  z-index: ${(props) => (props.openNav ? "99" : "")};

  .line {
    height: 2px;
    background-color: #ffffff;
  }

  .line-two {
    display: ${(props) =>
  props.openNav ? "none" : "flex"};
  }      

  .line-one {
    transform: ${(props) =>
      props.openNav ? " rotate(45deg) translate(2px, 4px)" : ""};
  }

  .line-three {
    transform: ${(props) =>
      props.openNav ? " rotate(-45deg) translate(3px, -5px)" : ""};
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavBar = styled.nav<NavOpen>`
  display: ${(props) => (props.openNav ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.secondarybg};
  gap: 6rem;
  z-index: 99;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  .nav__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.8rem;
  }

  .nav__list--item {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: ${(props) => props.theme.colors.maintxt};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: ${(props) => props.theme.colors.secondarytxt};
      transition: 0.3s;
    }
  }

  .btns {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 2.4rem;

    .btns__divider {
      opacity: 0.3;
      border: 1px solid #f2f2f2;
      height: 1.6rem;
      /* transform: rotate(90deg); */
    }
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
    min-height: 0vh;
    width: max-content;
    background-color: transparent;
    position: relative;
  gap: 2.8rem;


    .nav__list {
      flex-direction: row;
      align-items: center;
    }
    .btns {
      flex-direction: row;
    }
  }
`;
