import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { FaHtml5, FaCss3, FaReact, FaSass } from "react-icons/fa";
import {
  SiGit,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiBootstrap,
  SiStyledcomponents,
} from "react-icons/si";

const StackContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 768px) {
    margin-top: -0.5rem;
  }

`;

const StackHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;

  span {
    color: #f4ff69;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.7rem;
  }
`;

const StackContentContainer = styled.div`
  margin-top: 1rem;
  margin-left: 8%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  overflow: hidden;  

  @media screen and (max-width: 349px) {
    overflow-y: hidden;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    font-size: 0.7rem;
    //margin-left: 15%;
    //padding: 0 1.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    overflow-y: hidden;
    grid-column-gap: 25px;
    font-size: 0.8rem;
    //padding: 0 3rem;
  }

  @media screen and (min-width: 768px) and (max-width: 990px) {
    overflow-y: hidden;
    grid-column-gap: 25px;
    font-size: 1rem;
    padding: 0 3rem;
  }
`;

const StackContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.3rem;
`;

const StackContent = styled.div`
  @media screen and (max-width: 767) {
    p {
      font-size: 1rem;
    }
  }
`;

const StackIconHTML = styled(FaHtml5)`
  font-size: 2.5rem;
`;
const StackIconTypescript = styled(SiTypescript)`
  font-size: 2.5rem;
`;
const StackIconGraphql = styled(SiGraphql)`
  font-size: 2.5rem;
`;
const StackIconCss = styled(FaCss3)`
  font-size: 2.5rem;
`;
const StackIconNext = styled(SiNextdotjs)`
  font-size: 2.5rem;
`;
const StackIconBootstrap = styled(SiBootstrap)`
  font-size: 2.5rem;
`;
const StackIconJavascript = styled(SiJavascript)`
  font-size: 2.5rem;
`;
const StackIconSass = styled(FaSass)`
  font-size: 2.5rem;
`;
const StackIconGit = styled(SiGit)`
  font-size: 2.5rem;
`;
const StackIconReact = styled(FaReact)`
  font-size: 2.5rem;
`;
const StackIconTailwind = styled(SiTailwindcss)`
  font-size: 2.5rem;
`;
const StackIconStyled = styled(SiStyledcomponents)`
  font-size: 2.5rem;
`;

const Stacks = () => {
  return (
    <>
      <Head>
        <title>Stacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Nav>
        <Link href="/" passHref>
          <NavLink>
            <HiOutlineArrowNarrowLeft
              style={{ marginRight: "1rem", fontSize: "1.1rem" }}
            />
            My Stacks{" "}
            <HiOutlineArrowNarrowRight
              style={{ marginLeft: "1rem", fontSize: "1.1rem" }}
            />
          </NavLink>
        </Link>
  </Nav>*/}

      <StackContainer>
        <StackHeading>
          stacks<span>.</span>
        </StackHeading>

        <StackContentContainer>
          <StackContents>
            <StackContent>
              <StackIconHTML />
              <p>HTML5</p>
            </StackContent>
            <StackContent>
              <StackIconTypescript />
              <p>Typescript</p>
            </StackContent>
            <StackContent>
              <StackIconGraphql />
              <p>GraphQL</p>
            </StackContent>
          </StackContents>

          <StackContents>
            <StackContent>
              <StackIconCss />
              <p>CSS3</p>
            </StackContent>
            <StackContent>
              <StackIconNext />
              <p>NextJs</p>
            </StackContent>
            <StackContent>
              <StackIconBootstrap />
              <p>BootStrap</p>
            </StackContent>
          </StackContents>

          <StackContents>
            <StackContent>
              <StackIconJavascript />
              <p>JavaScript</p>
            </StackContent>
            <StackContent>
              <StackIconSass />
              <p>SASS</p>
            </StackContent>
            <StackContent>
              <StackIconGit />
              <p>Git</p>
            </StackContent>
          </StackContents>

          <StackContents>
            <StackContent>
              <StackIconReact />
              <p>React</p>
            </StackContent>
            <StackContent>
              <StackIconTailwind />
              <p>Tailwind CSS</p>
            </StackContent>
            <StackContent>
              <StackIconStyled />
              <p>Styled Components</p>
            </StackContent>
          </StackContents>
        </StackContentContainer>
      </StackContainer>
    </>
  );
};

export default Stacks;
