import styled from "styled-components";

const FooterWrapper = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

const Footer = () => (
  <FooterWrapper>
    <span>caioalcantara.dev © 2022 - MADE WITH LOVE AND REACT</span>
  </FooterWrapper>
);

export default Footer;
