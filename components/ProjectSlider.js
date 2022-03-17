import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

const ProjectCardContainer = styled.div``;

const ProjectImage = styled.div`
  img {
    width: 100%;
  }
`;
const ProjectCardContent = styled.div``;
const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`;
const ProjectDescription = styled.p`
  font-size: 1rem;
`;
const ProjectStacks = styled.div`
  font-size: 0.9rem;

  ul {
    display: flex;
    flex-direction: row;
    margin-left: -1.5rem;

    li {
      padding-right: 2rem;
    }
  }
`;
const ProjectCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const CodeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: -10px 12px;
  width: 160px;
`;

const ProjectSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <ProjectCardContainer>
                <ProjectImage>
                  <img src={slide.image} alt="Project Images" />
                </ProjectImage>

                <ProjectCardContent>
                  <ProjectTitle>{slide.title}</ProjectTitle>
                  <ProjectDescription>{slide.description}</ProjectDescription>
                  <ProjectStacks>
                    <ul>
                      <li>React</li>
                      <li>Tailwind css</li>
                      <li>Tensei</li>
                    </ul>
                  </ProjectStacks>
                  <ProjectCode>
                    <div>
                      <Link href="/" passHref>
                        <CodeLink>
                          <a>Source Code</a>
                          <p>{slide.iconGithub}</p>
                        </CodeLink>
                      </Link>
                    </div>
                    <div>
                      <Link href="/" passHref>
                        <CodeLink>
                          <a>View Demo</a>
                          <p>{slide.iconArrow}</p>
                        </CodeLink>
                      </Link>
                    </div>
                  </ProjectCode>
                </ProjectCardContent>
              </ProjectCardContainer>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ProjectSlider;
