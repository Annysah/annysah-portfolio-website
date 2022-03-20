import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import ProjectSliders from "../components/ProjectSliders";

import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;

  @media screen and (max-width: 767px) {
    margin: 7rem 0;
  }
`;

const ProjectHeadingContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
  }
`;

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;

  span {
    color: #f9af14;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    margin-top: -0.5rem;
    margin-left: 5rem;
    //position: absolute;             
    //left: 40%;                        
    //transform: translate(0, -50%)
  }
`;

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectContainer>
        <ProjectHeadingContainer>
          <ProjectHeading>projects<span>.</span></ProjectHeading>
        </ProjectHeadingContainer>

        <ProjectSliders slides={ProjectData} />
      </ProjectContainer>
    </>
  );
};

export default Projects;
