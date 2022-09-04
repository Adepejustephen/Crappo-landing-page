import styled from "styled-components";

type BtnProp = {
    whiteBg?: boolean;
    noBg?: boolean;
    heaaderBtn?: boolean;
}

export const Btn = styled.button<BtnProp>`
  background-color: ${(props) =>
    props.whiteBg
      ? props.theme.colors.maintxt
      : props.noBg
      ? "transparent"
      : props.theme.colors.btnbg};
  padding: ${(props) =>
    props.heaaderBtn ? " 1rem 2rem;" : ".8rem 1rem .8rem 2.4rem"};
  color: ${(props) =>
    props.whiteBg ? props.theme.colors.mainbg : props.theme.colors.maintxt};
  font-size: ${(props) =>
    props.heaaderBtn ? " 1.4;" : "1.3rem"};
  border: none;
  outline: none;
  border-radius: 3.2rem;
  cursor: pointer;
  transition: 0.3s;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.4rem;

  &:hover {
    background-color: ${(props) =>
      props.whiteBg ? "#f7f7f7" : props.noBg ? "" : "rgb(72, 133, 254)"};
    transition: 0.3s;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.6rem;
    padding: ${(props) =>
      props.heaaderBtn ? " 1rem 2rem;" : "1.2rem 1.2rem 1.2rem 2.4rem"};
  }
`;