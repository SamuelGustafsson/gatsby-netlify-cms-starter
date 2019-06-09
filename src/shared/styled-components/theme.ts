// tslint:disable:typedef
const colors = {
  navyBlue: "rgb(0, 21, 30)",
  lightForestGreen: "rgb(83,155,92)",
};

const fonts = {
  text: "Roboto",
};

const breakpoints = ["31.25em", "43.75em", "46.875em"];
const fontSizes = [
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4.0rem",
  "4.8rem",
  "6.4rem",
];
const space = [
  "0",
  ".4rem",
  ".8rem",
  "1.2rem",
  "1.6rem",
  "2.0rem",
  "3.2rem",
  "4.8rem",
  "6.4rem",
  "9.6rem",
];

export interface IStyleClosetTheme {
  breakpoints: string[];
  fontSizes: string[];
  space: string[];
  colors: { [key in keyof typeof colors]: string };
  fonts: { [key in keyof typeof fonts]: string };
}

const theme: IStyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  fonts,
};

export default theme;
