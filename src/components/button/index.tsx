import React from 'react'
import { Btn } from './Button.Styles';

type ButtonProp = {
  children: React.ReactNode;
  whiteBg?: boolean;
  noBg?: boolean;
  heaaderBtn?: boolean;
};

export const Button = ({ children, whiteBg, noBg, heaaderBtn }: ButtonProp) => {
  return (
    <Btn whiteBg={whiteBg} noBg={noBg} heaaderBtn={heaaderBtn}>
      {children}
    </Btn>
  );
};
