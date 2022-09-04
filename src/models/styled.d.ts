
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      maintxt: string;
      secondarytxt: string;
      mainbg: string;
      secondarybg: string;
      btnbg: string;
    };

    fontWeights: {
      normal: string;
      semibold: string;
      bold: string;
    };

    fontSize: {
      
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}

