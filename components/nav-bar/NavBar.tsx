import styled from "styled-components";

type NavBarProps = {
  activeItem?: string;
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 2rem 3rem;
  text-transform: uppercase;
  z-index: 3;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled.a<{ isActive: boolean }>`
  margin: 0 1rem;
  ${({ isActive }) =>
    isActive &&
    `
    padding-bottom: 10px;
    border-bottom: 2px solid ${({ theme }: any) => theme.colors.darkpink};
  `}
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  font-weight: 900;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.darkpink},
    ${({ theme }) => theme.colors.pink}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const navItems = [
  {
    slug: "home",
  },
  {
    slug: "posts",
  },
  {
    slug: "projects",
  },
  {
    slug: "contact",
  },
];

const NavBar = ({ activeItem = "home" }: NavBarProps) => {
  console.log({ activeItem });
  return (
    <Nav>
      <LogoWrapper>
        <span>caioalcantara.dev</span>
      </LogoWrapper>
      <NavItems>
        {navItems.map(({ slug }) => (
          <NavItem key={slug} isActive={slug === activeItem}>
            {slug}
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
};

export default NavBar;
