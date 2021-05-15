import { CSSObject, CSSProp } from "styled-components";
import { theme } from "../configs/theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module "styled-system" {}
