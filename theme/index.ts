import type { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  colors: {
    background: "#323232",
    text: "#FFF",
    tag: "#FA4EAB",
    card: "#121212",
  },
};

const light: DefaultTheme = {
  colors: {
    background: "#FFF",
    text: "#000",
    tag: "#FA4EAB",
    card: "#121212",
  },
};

export const theme = {
  dark,
  light,
};
