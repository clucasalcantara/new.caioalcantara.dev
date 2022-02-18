import { useState } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import { theme } from "../theme";
import { GlobalStyle } from "../styles";

type ThemeType = "light" | "dark";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState<ThemeType>("dark");
  const pagePropsWithTheme = { ...pageProps, setActiveTheme };

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Component {...pagePropsWithTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
