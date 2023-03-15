import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProjectItems from "../components/ProjectItems";

import { data } from "../data/data";
import { projectsNav } from "../data/data";

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

const ProjectMapData = () => {
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
    </>
  )
}

export default ProjectMapData