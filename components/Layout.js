import Navbar from "./Navbar";

const Layout = ({ children, themes }) => {
  return (
    <>
      <Navbar themes= {themes} />
      {children}
    </>
  );
};

export default Layout;
