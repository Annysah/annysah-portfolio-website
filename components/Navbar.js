import styled from "styled-components";

import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .logo {
    padding: 15px 0;
    font-family: "Sacramento", cursive;
    font-size: 1.6rem;
  }
`;

const NavThemeSwitch = styled.div`
  
`;

const Navbar = ({ themes, icon }) => {
  return (
    <Nav>
      <div className="logo">Annysah</div>
      
      <Burger themes={themes} icon={icon} />

      <NavThemeSwitch onClick={() => themes()}>{icon}</NavThemeSwitch>
    </Nav>
  );
};

export default Navbar;
