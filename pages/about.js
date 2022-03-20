import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

import photo from "../images/aboutphoto.jpg";

const AboutContainer = styled.div`
  padding: 3rem 0.5rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 768px) {
    margin-top: -3.2rem;
  }
`;

const AboutHeading = styled.div`
  font-weight: 900;

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: #f9af14;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const AboutContent = styled.div`
  text-align: left;
  font-size: 1.2rem;
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
          <h1>about me<span>.</span></h1>
        </AboutHeading>
        <AboutContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            bibendum nisi adipiscing odio. Nisl tortor adipiscing sit felis
            tempus amet. Iaculis quam nulla sem odio bibendum.
          </p>
          <p>
            Dolor morbi volutpat quis quis a, platea. Egestas tellus hac aenean
            in bibendum id. Adipiscing proin vehicula auctor nibh ut vestibulum
            elit, vel suscipit.
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
