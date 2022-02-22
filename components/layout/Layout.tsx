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
  overflow: hidden;
  height: 100vh;
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
