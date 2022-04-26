import styled from "styled-components";
import Link from "next/link";

const NavbarLinkContainer = styled.div`
  display: flex;
  //flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: ${({ theme }) => theme.body};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
`;

const StyledLink = styled.a`
  padding: 18px 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};

  /*@media screen and (max-width: 768px) {
    padding: 0rem 1rem;
    color: #fff;
  }*/

  span {
    //color: #f9af14;
    color: #f4ff69;
    font-size: 20px;
    font-weight: bolder;
  }

  &:focus {
    font-weight: 900;
  }
`;

const RightNav = ({ open, themes  }) => {
  return (
    <NavbarLinkContainer open={open}>
      <Link href="/" passHref>
        <StyledLink>
          home<span>.</span>
        </StyledLink>
      </Link>
      <Link href="/about" passHref>
        <StyledLink>
          about<span>.</span>
        </StyledLink>
      </Link>
      <Link href="/project" passHref>
        <StyledLink>
          projects<span>.</span>
        </StyledLink>
      </Link>
      <Link href="/stacks" passHref>
        <StyledLink>
          stacks<span>.</span>
        </StyledLink>
      </Link>
      <Link href="/articles" passHref>
        <StyledLink>
          articles<span>.</span>
        </StyledLink>
      </Link>
      <Link href="/contact" passHref>
        <StyledLink>
          contact<span>.</span>
        </StyledLink>
      </Link>
    </NavbarLinkContainer>
  );
};

export default RightNav;
