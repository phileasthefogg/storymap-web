const colors = {
  primary: "#4c6fff",
  secondary: "#4DC9FF",
  error: "tomato",
  black: "#000000",
  grey: "a6a6a6",
  white: "#ffffff",
  background: "#282c34",
};

type TColors = typeof colors;

const fonts = {
  RobotoBlack:
    'Roboto-Black, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',

  RobotoBold:
    'Roboto-Bold, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',

  RobotoMedium:
    'Roboto-Medium, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',

  RobotoRegular:
    'Roboto-Regular, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

type TFonts = typeof fonts;

export interface ITheme {
  colors: { [key in keyof TColors]: string };

  fonts: { [key in keyof TFonts]: string };
}

export const theme: ITheme = { colors, fonts };
