import { useState } from "react"

import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(extendNavbar) => (extendNavbar ? "100vh" : "80px")};
  background: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.fontColor};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavThemeSwitch = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 0.5rem;
    margin-right: -1.3rem;
  }
`;

const NavTest = ({ themes, icon }) => {
const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink> Home</NavbarLink>
            <NavbarLink> Products</NavbarLink>
            <NavbarLink> Contact Us</NavbarLink>
            <NavbarLink> About Us</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src='#'></Logo>
          <NavThemeSwitch onClick={() => themes()}>{icon}</NavThemeSwitch>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended> Home</NavbarLinkExtended>
          <NavbarLinkExtended> Products</NavbarLinkExtended>
          <NavbarLinkExtended> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default NavTest