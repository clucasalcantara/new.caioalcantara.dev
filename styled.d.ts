import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      tag: string;
      card: string;
      lightpink: string;
      pink: string;
      darkpink: string;
    };
  }
}
