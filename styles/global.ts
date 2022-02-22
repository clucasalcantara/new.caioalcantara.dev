import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: 100;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightpink};
        &:hover {
            transition: 0.2s ease-in-out;
            color: ${({ theme }) => theme.colors.darkpink};
        }
    }

    // * {
    //     box-sizing: border-box;
    // }
`;

export default GlobalStyle;
