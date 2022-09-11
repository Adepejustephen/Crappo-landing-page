import React from 'react'
import { Btn } from './Button.Styles';

type ButtonProp = {
  children: React.ReactNode;
  whiteBg?: boolean;
  noBg?: boolean;
  heaaderBtn?: boolean;
  variants?: any;
};

export const Button:React.FC<ButtonProp> = ({ children, whiteBg, noBg, heaaderBtn, variants }) => {
  return (
    <Btn whiteBg={whiteBg} noBg={noBg} heaaderBtn={heaaderBtn} variants={variants}>
      {children}
    </Btn>
  );
};
