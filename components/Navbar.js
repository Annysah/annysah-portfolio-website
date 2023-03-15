import styled from "styled-components";
import Image from "next/image";

import Burger from "./Burger";

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.cardBody};
`

const Nav = styled.nav`
  height: 70px;
  padding: 0 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  .logo {
    padding: 15px 0;
    font-size: 1.6rem;
  }
`;

const NavThemeSwitch = styled.div`
  margin-right: 7%;
`;

const Navbar = ({ themes, icon }) => {
  return (
    <Header>
      <Nav>
        <div className="logo">
          <Image
            src="https://res.cloudinary.com/annysah/image/upload/v1673757074/Black_Yellow_Minimalist_Fashion_Logo__1_-removebg-preview_baymrn.png"
            width={200}
            height={200}
          />
        </div>

        <Burger themes={themes} icon={icon} />

        <NavThemeSwitch onClick={() => themes()}>{icon}</NavThemeSwitch>
      </Nav>
    </Header>
  );
};

export default Navbar;
