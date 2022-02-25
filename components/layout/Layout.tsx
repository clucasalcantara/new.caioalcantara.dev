import styled from "styled-components";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";
import { Stripes } from "./stripes";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.section`
  padding: 0 3rem;
  z-index: 2;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflowx: hidden;

  @media (min-width: 768px) {
    overflow: hidden;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <NavBar />
    <Stripes />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

export default Layout;
