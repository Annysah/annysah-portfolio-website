import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { MdArrowRightAlt } from "react-icons/md";

const LayoutContainer = styled.div`
  padding: 0 0.5rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 349px) {
    margin-left: 10%;
    margin-top: 3rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin-left: 10%;
    margin-top: 3rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 5rem;
  }
`;

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
  align-items: center;
  padding-top: 4.5rem;

  @media screen and (max-width: 1290px) {
    padding-top: 2rem;
    column-gap: 8rem;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5rem;
  }

  @media screen and (max-width: 768px) {
    gap: 2.7rem;
  }

  @media screen and (max-width: 576px) {
    gap: 1.5rem;
    padding-top: 2.2rem;
  }

  @media screen and (max-width: 450px) {
    gap: 4rem;
    padding-top: 4rem;
  }

  @media screen and (max-width: 395px) {
    gap: 2rem;
  }
`;

const ResumeLink = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background: #111;
  border-radius: 5px;
  padding: 12px 16px;
  width: 160px;
  margin-top: 2.4rem;
  font-family: "Work Sans", sans-serif;

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin-left: 5%;
  }
`;

const profile = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

const HomeImage = styled.img`
  background: url("https://res.cloudinary.com/annysah/image/upload/v1673760709/avatar_eudw8p.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 360px;
  height: 360px;
  box-shadow: inset 0 0 0 8px rgb(255, 255, 255 / 30%);
  animation: ${profile} 8s ease-in-out infinite 1s;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 576px) {
    width: 280px;
    height: 280px;
  }

  @media screen and (max-width: 395px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const HomeHeading = styled.p`
  font-size: 1.5rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  @media screen and (max-width: 349px) {
    margin-left: -5%;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const HomeName = styled.h1`
  font-size: 3.5rem;
  @media screen and (max-width: 349px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 350px) and (max-width: 767px) {
    font-size: 2.5rem;
    padding: 0 1rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

const HomePara = styled.p`
  font-size: 1.5rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  @media screen and (max-width: 349px) {
    font-size: 0.9rem;
    line-height: 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    font-size: 1rem;
    padding: 0 1rem;
    line-height: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 360px;
    line-height: 2;
  }
`;

const Main = ({ themes }) => {
  return (
    <>
      <LayoutContainer>
        <main>
          <HomeWrapper>
            <div>
              <div>
                <HomeHeading>Hello 👋, my name is</HomeHeading>
                <HomeName>Anisat Ahmed</HomeName>
                <HomePara>
                  A Frontend Engineer, Technical Writer & 
                  <br />
                  Accessibility Advocate.
                </HomePara>
              </div>

              <div>
                <Link
                  href="./contact"
                  passHref
                >
                  <ResumeLink>
                    <a>Get in Touch</a>
                    <MdArrowRightAlt
                      style={{ marginLeft: "0.2rem", fontSize: "1.5rem" }}
                    />
                  </ResumeLink>
                </Link>
              </div>
            </div>
            <div>
              <HomeImage src="https://res.cloudinary.com/annysah/image/upload/v1673760709/avatar_eudw8p.jpg" alt="An image of Anisat Ahmed" />
            </div>
          </HomeWrapper>
        </main>
      </LayoutContainer>
    </>
  );
};

export default Main;