import styled from "styled-components";
import Image from "next/image";

//import { useState } from "react";

import Burger from "./Burger";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  padding: 0 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /*box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
            1px 2px 4px 0px rgba(0,255,255,0.7),
            2px 4px 8px 0px rgba(0,255,255,0.7),
            2px 4px 16px 0px rgba(0,255,255,0.7);*/

  .logo {
    padding: 15px 0;
    margin-left: 5.8rem;
    //font-family: "Sacramento", cursive;
    font-size: 1.6rem;
  }
`;

/*const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 7%;
`*/

const ImageWrapper = styled.div`
  margin-left: 7%;
`;

const NavThemeSwitch = styled.div`
  margin-right: 7%;
`;

const Navbar = ({ themes, icon }) => {
  /*const [isSwitch, setIsSwitch] = useState(false);

  if (themes === "light") {
    setIsSwitch(true);
  } else {
    setIsSwitch(false);
  }*/

  return (
    <Nav>
      <div className="logo">Annysah</div>

      {/*<ImageWrapper>
        <Image
          src={
            "https://res.cloudinary.com/annysah/image/upload/v1650998817/portfolio/Group_2_wok4zy.png"
          }
          width={150}
          height={50}
          quality={70}
        />
        </ImageWrapper>*/}

      <Burger themes={themes} icon={icon} />

      <NavThemeSwitch onClick={() => themes()}>{icon}</NavThemeSwitch>
    </Nav>
  );
};

export default Navbar;
