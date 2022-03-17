import styled from "styled-components";
import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const LayoutContainer = styled.div`
  padding: 0 0.5rem;
  margin-top: 11rem;
  margin-left: -11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 349px) {
    margin-left: 17%;
    margin-top: 9rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin-left: 10%;
    margin-top: 9rem;
  }

  @media screen and (min-width: 768px) and (max-width: 990px) {
    margin-left: 3%;
    margin-top: 10rem;
  }
`;

const MainArrow = styled.div`
  font-size: 2.1rem;
  font-weight: 100;
  margin-top: 2.6rem;
  margin-left: -2.5rem;
  text-align: center;
  display: flex;
  justify-content: flex-start;
`;

const ArrowIcon = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 2rem;
`;

const ResumeLink = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background: #111;
  border-radius: 5px;
  padding: 12px 16px;
  width: 160px;
  margin-top: 2.5rem;

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin-left: 5%;
  }
`;

const TwitterIcon = styled.div`
  background-color: #c9eefb;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: 24%;
  right: 30%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 0px;
    height: 0px;
    top: 33%;
    left: 8%;
  }
`;

const Twitter = styled(BsTwitter)`
  color: #ffffff;
  font-size: 2.3rem;

  @media screen and (max-width: 767px) {
    color: #1da1f2;
    font-size: 1rem;
  }
`;

const GithubIcon = styled.div`
  background-color: #555555;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  right: 10%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 0px;
    height: 0px;
    top: 41%;
    left: 8%;
  }
`;

const Github = styled(BsGithub)`
  color: #ffffff;
  font-size: 2.3rem;

  @media screen and (max-width: 767px) {
    color: #000;
    font-size: 1rem;
  }
`;

const GmailIcon = styled.div`
  background-color: #fce8e6;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 75%;
  right: 15%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 0px;
    height: 0px;
    top: 49%;
    left: 8%;
  }
`;

const Gmail = styled(SiGmail)`
  color: #dc3e34;
  font-size: 1.4rem;

  @media screen and (max-width: 767px) {
    color: #db4437;
    font-size: 1rem;
  }
`;

const LinkedInIcon = styled.div`
  background-color: #0a66c2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 80%;
  right: 30%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 0px;
    height: 0px;
    top: 57%;
    left: 8%;
  }
`;

const LinkedIn = styled(BsLinkedin)`
  color: #fff;
  font-size: 1.6rem;

  @media screen and (max-width: 767px) {
    color: #0077b5;
    font-size: 1rem;
  }
`;

const HomeHeading = styled.h2`
  @media screen and (max-width: 349px) {
    margin-left: -5%;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const HomeName = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 349px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    font-size: 2.5rem;
    padding: 0 1rem;
  }
`;

const HomePara = styled.p`
  font-size: 1.1rem;

  @media screen and (max-width: 349px) {
    font-size: 0.9rem;
    line-height: 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    font-size: 1rem;
    padding: 0 1rem;
    line-height: 30px;
  }
`;

const Main = ({ themes }) => {
  return (
    <>
      {/*<Nav>
        <Link href="/" passHref>
          <NavLink>
            <HiOutlineArrowNarrowLeft
              style={{ marginRight: "1rem", fontSize: "1.1rem" }}
            />
            Home{" "}
            <HiOutlineArrowNarrowRight
              style={{ marginLeft: "1rem", fontSize: "1.1rem" }}
            />
          </NavLink>
        </Link>
  </Nav>*/}

      <TwitterIcon>
        <Link href="https://twitter.com/AnisatAkinbani" passHref>
          <a>
            <Twitter />
          </a>
        </Link>
      </TwitterIcon>

      <GithubIcon>
        <Link href="https://github.com/Annysah" passHref>
          <a>
            <Github />
          </a>
        </Link>
      </GithubIcon>

      <GmailIcon>
        <Link href="https://anisatakinbani13@gmail.com">
          <a>
            <Gmail />
          </a>
        </Link>
      </GmailIcon>

      <LinkedInIcon>
        <Link href="https://linkedin.com/in/anisatakinbani">
          <a>
            <LinkedIn />
          </a>
        </Link>
      </LinkedInIcon>

      <LayoutContainer>
        <main>
          <div>
            <div>
              <HomeHeading>Hello 👋, my name is</HomeHeading>
              <HomeName>Anisat Ahmed</HomeName>
              <HomePara>
                I'm a Frontend Engineer, Technical Writer and an Open Source
                Contributor.
              </HomePara>
            </div>

            <div>
              <Link
                href="https://drive.google.com/file/d/11y65SCBjSwFv7Vd4OrJFOA1xFrhlhCIr/view?usp=sharing"
                passHref
              >
                <ResumeLink>
                  <a>View resume</a>
                  <MdArrowRightAlt
                    style={{ marginLeft: "0.2rem", fontSize: "1.5rem" }}
                  />
                </ResumeLink>
              </Link>
            </div>

            {/*<MainArrow>
              <ArrowIcon>
                <BsArrowLeftCircle />
              </ArrowIcon>
              <ArrowIcon>
                <BsArrowRightCircle />
              </ArrowIcon>
            </MainArrow>*/}
          </div>
        </main>
      </LayoutContainer>
    </>
  );
};

export default Main;
