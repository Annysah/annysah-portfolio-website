import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import ProjectSlider from "../components/ProjectSlider";

import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectMain = styled.div`
  margin-top: 6.5rem;
  font-family: 'Space Grotesk', sans-serif;
  @media screen and (max-width: 768px) {
    margin-top: 1.6rem;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 1.8rem;
  }
`

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 2px;
  margin: 0 0 1rem 0;

  span {
    color: #f9af14;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 2.5rem 0;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.9rem;
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

        <ProjectSlider slides={ProjectData} themes={themes} />
      </ProjectMain>
    </>
  );
};

export default Project;
