import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { data } from "../data/data";
import ProjectSlider from "../components/ProjectSlider";

const ProjectMain = styled.div`
  margin-top: 5.5rem;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }

`

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 2px;
  margin: 0 0 1rem 0;

  span {
    color: #f4ff69;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 2.5rem 0;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const Project = ({ themes }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectMain>
        <ProjectHeading>
          projects<span>.</span>
        </ProjectHeading>

        <ProjectSlider slides={data} themes={themes} />
      </ProjectMain> 
    </>
  );
};

export default Project;
