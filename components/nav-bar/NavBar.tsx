import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 2rem 3rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled.a`
  margin: 0 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

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
