import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Head from "next/head";

import ProjectItems from "../components/ProjectItems";

import { data } from "../data/data";
import { projectsNav } from "../data/data";

const ProjectMain = styled.div`
  margin-top: 6.5rem;

  @media screen and (max-width: 1024px) {
    margin-top: 14rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10rem;
  }

  @media screen and (max-width: 425px) {
    margin-top: 5.2rem;
  }
`

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 2px;
  margin: 0 0 1rem 0;

  span {
    color: #ffec4e;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 2.5rem 0;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 350px) {
    column-gap: 0.25rem;
  }
`

const ProjectItem = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #111;
    color: #fff;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.7rem;
  }
  
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 3rem;
  justify-content: center;

  @media screen and (max-width: 992px) {
    padding: 1rem 5rem;
    gap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: max-content;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`
const projects = () => {
  const [item, setItem] = useState({ name: 'All'})
  const [ works, setWorks] = useState([]);

  useEffect(() => {
    if(item.name === "All") {
      setWorks(data);
    } else {
      const newWorks = data.filter((work) => {
        return work.category === item.name
      });
      setWorks(newWorks);
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
  };
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectMain>
        <ProjectHeading>
          projects
        </ProjectHeading>

        <ProjectFilters>
          {projectsNav.map((item, index) => {
            return (
              <ProjectItem onClick={(e) => { handleClick(e, index) }} key={index}>
                {item.name}
              </ProjectItem>
            )
          })}
        </ProjectFilters>
        
        <ProjectContainer>
          {works.map((item) => {
            return <ProjectItems item={item} key={item.id} />
          })}
        </ProjectContainer>

      </ProjectMain>
    </>
  )
}

export default projects