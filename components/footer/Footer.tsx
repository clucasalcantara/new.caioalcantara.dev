import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  text-transform: uppercase;
  span {
    font-weight: 100;
    font-size: 8pt;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <span>caioalcantara.dev © 2022 - MADE WITH LOVE AND REACT</span>
  </FooterWrapper>
);

export default Footer;
