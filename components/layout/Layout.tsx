import { NavBar } from "../nav-bar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <main>
    <NavBar />
    {children}
  </main>
);

export default Layout;
