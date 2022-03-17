import Link from "next/link";
import styled from "styled-components";

import { FaAngleDoubleRight } from "react-icons/fa";

/*const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5rem;
  padding: 2rem 4rem;
  position: absolute;
  top: 19%;
  gap: 2.5rem;
  text-align: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    font-size: 1.5rem;
  }
`;*/

const CircularNavBtn = styled.button``;
const CircularNavWrapper = styled.div``;

const NavItem = () => {
  return (
    <>
      {/*<Nav>
        <Link href="/" passHref>
          <NavLink>Home <FaAngleDoubleRight style={{marginLeft: '0.5rem', fontSize: '0.5rem'}} /></NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About <FaAngleDoubleRight style={{marginLeft: '0.5rem', fontSize: '0.5rem'}} /></NavLink>
        </Link>
        <Link href="/projects" passHref>
          <NavLink>Projects <FaAngleDoubleRight style={{marginLeft: '0.5rem', fontSize: '0.5rem'}} /></NavLink>
        </Link>
        <Link href="/stacks" passHref>
          <NavLink>My Stacks <FaAngleDoubleRight style={{marginLeft: '0.5rem', fontSize: '0.5rem'}} /></NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Contact <FaAngleDoubleRight style={{marginLeft: '0.5rem', fontSize: '0.5rem'}} /></NavLink>
        </Link>
      </Nav>*/}

      <CircularNavBtn>Menu</CircularNavBtn>
      <CircularNavWrapper>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Stacks</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </CircularNavWrapper>
      <CircularNavOverlay></CircularNavOverlay>
    </>
  );
};

export default NavItem;
