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


export const ProjectData = [
  {
    image:
      "https://images.unsplash.com/photo-1646582561067-475acdd008c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Zia Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
  {
    image:
      "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Boso Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
  {
    image:
      "https://images.unsplash.com/photo-1646442423753-7a91b6f2f5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: " Finance App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
  {
    image:
      "https://images.unsplash.com/photo-1646582561067-475acdd008c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Zia Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
  {
    image:
      "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Zia Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
  {
    image:
      "https://images.unsplash.com/photo-1646442423753-7a91b6f2f5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Zia Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum nisi adipiscing odio.",
    iconGithub: <BsGithub />,
    iconArrow: <BsBoxArrowUpRight />,
  },
];

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
