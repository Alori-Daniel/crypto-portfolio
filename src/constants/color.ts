export const COLORS = {
  primary: "#1B232A",
  secondary: "#5ED5A8",
  background: "#1B232A",
  text: "#C1C7CD",
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
