const colors = {
  navyBlue: "rgb(0, 21, 30)",
  lightForestGreen: "rgb(83,155,92)",
}

const breakpoints = ["31.25em", "43.75em", "46.875em"]
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
]
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
]

export interface StyleClosetTheme {
  breakpoints: string[]
  fontSizes: string[]
  space: string[]
  colors: { [key in keyof typeof colors]: string }
}

const theme: StyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
}

export default theme
