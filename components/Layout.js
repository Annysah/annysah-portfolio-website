import Navbar from "./Navbar";

const Layout = ({ children, themes, icon }) => {
  return (
    <>
      {/*<Navbar themes= {themes} icon={icon} />*/}
      <Navbar themes={themes} icon={icon} />
      {children}
    </>
  );
};

export default Layout;
