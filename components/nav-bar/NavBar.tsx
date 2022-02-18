import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled.a`
  margin: 0 1rem;
`;

const LogoWrapper = styled.div``;

const NavBar = () => (
  <Nav>
    <LogoWrapper>
      <span>caioalcantara.dev</span>
    </LogoWrapper>
    <NavItems>
      <NavItem>home</NavItem>
      <NavItem>posts</NavItem>
      <NavItem>projects</NavItem>
      <NavItem>contact</NavItem>
    </NavItems>
  </Nav>
);

export default NavBar;
