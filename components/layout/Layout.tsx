import styled from "styled-components";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.section`
  padding: 0 3rem;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <NavBar />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

export default Layout;
