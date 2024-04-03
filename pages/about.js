import styled from "styled-components";
import Head from "next/head";

const AboutContainer = styled.div`
  padding: 3rem 0.5rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboutHeading = styled.div`

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: #ffec4e;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const AboutContent = styled.div`
  text-align: left;
  font-weight: 300;
  font-family: "Work Sans", sans-serif;
  font-size: 2rem;
  padding: 0 18rem;
  line-height: 2;
  margin-top: -1rem;

  @media screen and (max-width: 349px) {
    padding: 0 35px;
    font-size: 0.8rem;
    margin-top: -1rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    padding: 0 35px;
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 5rem;
    font-size: 1.3rem;
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutContainer>
        <AboutHeading>
          <h1>
            about me{/*<span>.</span>*/}
          </h1>
        </AboutHeading>
        <AboutContent>
          <p>
            Hey there, I&apos;m Anisat Ahmed, a front-end engineer and technical writer currently immersed in the world of Creative Technologies as I pursue my Master&apos;s degree in the United States.
          </p>

          <p>
            My playground? Crafting clean, intuitive user interfaces for websites and web apps. I thrive on simplicity, turning intricate ideas into seamless experiences, with ReactJS as my trusted companion.
          </p>
          <p>
            Join me in the pursuit of digital elegance. Let&apos;s create interfaces that not only function flawlessly but also delight users at every click.
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
