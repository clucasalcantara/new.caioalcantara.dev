import type { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  colors: {
    background: "#323232",
    text: "#FFF",
    tag: "#FA4EAB",
    card: "#121212",
    lightpink: "#FFF2F9",
    pink: "#FE83C6",
    darkpink: "#FA4EAB",
  },
};

const light: DefaultTheme = {
  colors: {
    background: "#FFF",
    text: "#000",
    tag: "#FA4EAB",
    card: "#121212",
    lightpink: "#FFF2F9",
    pink: "#FE83C6",
    darkpink: "#FA4EAB",
  },
};

export const theme = {
  dark,
  light,
};
