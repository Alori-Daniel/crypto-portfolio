export const COLORS = {
  primary: "#1B232A",
  secondary: "#5ED5A8",
  background: "#1B232A",
  text: "#C1C7CD",
  darkText: "#777777",
  bgLight: "#252E35",
  bgDark: "#161C22",
  grey: "#E3E8ED",

  white: "#ffffff",
  black: "#000000",
} as const;

export type ColorKey = keyof typeof COLORS;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export type SpacingKey = keyof typeof spacing;
