import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

const ProjectContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  height: 100%;

  @media screen and (max-width: 767px) {
    margin-top: -0.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 5%;
    padding: 0 1rem;
  }
`;

const ProjectContainer = styled.div`
   @media screen and (max-width: 349px) {
    margin-top: -0.5rem;
    margin-left: -25%;
    margin-right: 25%;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin-top: -0.5rem;
    //margin-left: 35%;
    //margin-right: 10%;
  }
`

const ArrowLeft = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  font-size: 2.2rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 349px) {
    left: 5%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    left: 10%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 998px) {
    left: -4%;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 999px) and (max-width: 1024px) {
    left: 3%;
    font-size: 1.8rem;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  font-size: 2.2rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 349px) {
    right: -20%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    right: -5%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    right: 3%;
    font-size: 1.8rem;
  }
`;

const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  @media screen and (max-width: 349px) {
    flex-direction: column;
    width: 290px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin: 1rem 0 0 42%;
  }

  @media screen and (min-width: 350px) and (max-width: 425px) {
    flex-direction: column;
    width: 290px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin: 0 -50% 0 10%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 400px;
  height: 280px;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    width: 290px;
    height: 180px;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    height: 250px;
  }
`;

const ProjectContent = styled.div`
  width: 400px;
  height: 230px;
  padding: 0 1.8rem;
  margin-top: -2.2rem;

  @media screen and (max-width: 767px) {
    padding: 0 5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 2rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;

  @media screen and (max-width: 1023px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 0.85rem;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 0.68rem;
  }
`;

const ProjectCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //margin-left: -2.5rem;
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

  a {
      @media screen and (max-width: 767px) {
        font-size: 0.8rem;
      }
    }

    p {
      @media screen and (max-width: 767px) {
        display: none;
      }
    }

  @media screen and (max-width: 767px) {
    width: auto;
    margin-top: 0;
    padding: 10px 14px;
  }
  }
`;

const ProjectSliders = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <ProjectContentContainer>
        <ProjectContainer>
          <ArrowLeft>
            <MdOutlineArrowBackIos className="left-arrow" onClick={prevSlide} />
          </ArrowLeft>
          <ArrowRight>
            <MdOutlineArrowForwardIos
              className="right-arrow"
              onClick={nextSlide}
            />
          </ArrowRight>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <ProjectContentWrapper>
                    <ProjectImage src={slide.image} alt="" />
                    <ProjectContent>
                      <ProjectTitle>{slide.title}</ProjectTitle>
                      <ProjectDescription>
                        {slide.description}
                      </ProjectDescription>
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
                    </ProjectContent>
                  </ProjectContentWrapper>
                )}
              </div>
            );
          })}
        </ProjectContainer>
      </ProjectContentContainer>
    </>
  );
};

export default ProjectSliders;
