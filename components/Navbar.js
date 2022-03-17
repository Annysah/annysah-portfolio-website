import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import logo from "../images/Anny.png";

import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";

import { CgHome, CgProfile } from "react-icons/cg";
import { MdWorkOutline, MdArticle } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";

const NavbarContent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  z-index: -100;
  padding: 0 3.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.body};;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (min-width: 768px) and (max-width: 990px) {
    font-size: 0.8rem;
  }
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (min-width: 768px) and (max-width: 990px) {
    padding: 0rem 1rem;
  }

  span {
    color: #f9af14;
  }

  &:focus {
    font-weight: 900;
  }

`;

const NavLogo = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
    margin-left: -1.3rem;
  }

  @media screen and (min-width: 768px) and (max-width: 990px) {
    font-size: 0.8rem;
  }
`;

const NavThemeSwitch = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 0.5rem;
    margin-right: -1.3rem;
  }
`;

const NavbarLinkContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


`;

const NavbarLink = styled.div`
  //position: relative;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const NavBar = ({ themes }) => {
  return (
    <>
      <NavbarContent>
        <NavLogo>
          {/*<Image src={logo} alt="Annysah Logo" width={40} height={30} />*/}
          <h1>Annysah</h1>
        </NavLogo>

        <NavbarLinkContainer>
          <NavbarLink>
            <Link href="/" passHref>
              <StyledLink>home<span>.</span></StyledLink>
            </Link>
            <Link href="/about" passHref>
              <StyledLink>about<span>.</span></StyledLink>
            </Link>
            <Link href="/project" passHref>
              <StyledLink>projects<span>.</span></StyledLink>
            </Link>
            <Link href="/stacks" passHref>
              <StyledLink>stacks<span>.</span></StyledLink>
            </Link>
            <Link href="/articles" passHref>
              <StyledLink>articles<span>.</span></StyledLink>
            </Link>
            <Link href="/contact" passHref>
              <StyledLink>contact<span>.</span></StyledLink>
            </Link>
          </NavbarLink>
        </NavbarLinkContainer>
        <NavThemeSwitch>
          <BsMoon style={{ fontSize: "1.5rem" }} onClick={() => themes()} />
        </NavThemeSwitch>
      </NavbarContent>
    </>
  );
};

export default NavBar;
