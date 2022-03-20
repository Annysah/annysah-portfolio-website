import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ProjectWrapper = styled.div``;

const ProjectCardContainer = styled.div`
  width: 55%;
  height: 60vh;
  max-width: 98rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.cardBody};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin: 2rem 23rem;
  border-radius: 0.8rem;

  @media screen and (max-width: 1024px) {
    //max-width: 80rem;
    width: 60%;
    margin: 4rem 17.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 2rem 4.5rem;
    flex-direction: column;
    height: 62vh;
  }

  @media screen and (max-width: 380px) {
    width: 80%;
    margin: 3rem 2.5rem;
  }
`;

const ProjectImage = styled.div`
  min-width: 23rem;
  max-width: 23rem;
  height: 18rem;
  transform: translateX(-10rem);
  position: relative;
  z-index: -100;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.8rem;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(253, 175, 20, 0.7),
      rgba(0, 242, 254, 0.3)
    );
    border-radius: 0.8rem;
  }

  @media screen and (max-width: 1024px) {
    min-width: 18rem;
    max-width: 18rem;
  }

  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    transform: translate(0, -2rem);
    height: 8rem;
  }
`;
const ProjectCardContent = styled.div`
  margin-left: -5rem;
  padding: 0 2rem;

  @media screen and (max-width: 1024px) {
    margin-left: -8rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-top: -1rem;
  }

  @media screen and (max-width: 380px) {
    margin-left: 1.8rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 1024px) {
    padding: 0 1.2rem;
    margin: 0 1rem 0 -1rem;
    letter-spacing: 0.8px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
    letter-spacing: 0.8px;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.7rem;
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

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.65rem;
  }
`;

const ProjectCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const ProjectCodeDiv = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 0 1.8rem 0 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0.7rem 0 0;
  }

  @media screen and (max-width: 380px) {
    margin: 0 0.5rem 0 0;
    width: 100%;
  }
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
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0px;
    width: 120px;
  }
  
  @media screen and (max-width: 768px) {
    //padding: 10px 8px;
    width: 28vw;
  } 
`;

const ArrowLeft = styled.div`
  position: absolute;
  top: 55%;
  left: 10%;
  font-size: 2.2rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1068px) {
    display: none;
  }
`;
const ArrowRight = styled.div`
  position: absolute;
  top: 55%;
  right: 10%;
  font-size: 2.2rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1068px) {
    display: none;
  }
`;

const ProjectSlider = ({ slides, themes }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <ArrowLeft>
        <MdOutlineArrowBackIos className="left-arrow" onClick={prevSlide} />
      </ArrowLeft>
      <ArrowRight>
        <MdOutlineArrowForwardIos className="right-arrow" onClick={nextSlide} />
      </ArrowRight>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current ? (
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
                    <ProjectCodeDiv>
                      <Link href="/" passHref>
                        <CodeLink>
                          <a>Source Code</a>
                          <p>{slide.iconGithub}</p>
                        </CodeLink>
                      </Link>
                    </ProjectCodeDiv>
                    <ProjectCodeDiv>
                      <Link href="/" passHref>
                        <CodeLink>
                          <a>View Demo</a>
                          <p>{slide.iconArrow}</p>
                        </CodeLink>
                      </Link>
                    </ProjectCodeDiv>
                  </ProjectCode>
                </ProjectCardContent>
              </ProjectCardContainer>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default ProjectSlider;
