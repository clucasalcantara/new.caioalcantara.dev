import type { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  colors: {
    background: "#323232",
    text: "#FFF",
  },
};

const light: DefaultTheme = {
  colors: {
    background: "#FFF",
    text: "#000",
  },
};

export const theme = {
  dark,
  light,
};
