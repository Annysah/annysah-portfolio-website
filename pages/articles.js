import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Space Grotesk", sans-serif;
  height: 100vh;

  @media screen and (max-width: 349px) {
    margin: 1rem 1.1rem 8rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    margin: 1rem 1.2rem 7rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0 1.1rem 4rem;
  }
`;

const ArticleHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;

  span {
    color: #ffec4e;
    font-size: 2.1rem;
  }

  @media screen and (max-width: 349px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const ArticleContentContainer = styled.div`
  margin-top: -10px;

  @media screen and (max-width: 349px) {
    margin-top: -20px;
  }
`;

const ArticleContents = styled.div`
  padding: 8px 12px;
  border-radius: 1rem;
  border: 2px solid #f0f0f0;
  //box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

const ArticleContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArticleTitle = styled.h1`
  font-size: 1.1rem;
  margin-right: 1.2rem;

  @media screen and (max-width: 385px) {
    font-size: 0.4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const ArticleDate = styled.p`
  font-size: 0.8rem;

  @media screen and (max-width: 385px) {
    font-size: 0.5rem;
  }
`;

const ArticleDescription = styled.p`
  font-size: 0.85rem;

  @media screen and (max-width: 385px) {
    font-size: 0.55rem;
  }
`;

const ArticleLink = styled.div`
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  width: 200px;
  margin-top: 1.5rem;
  text-decoration: underline;
`;

const ArticleArrow = styled.div`
  color: ${({ theme }) => theme.fontColor};
`;

const Articles = ({ themes }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <ArticleContainer>
        <ArticleHeading>
          articles{/*<span>.</span>*/}
        </ArticleHeading>

        <ArticleContentContainer>
          <ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>Build a Todo App with Next.js &amp; AWS Amplify</ArticleTitle>
              <Link
                href="https://dev.to/aws-builders/build-a-todo-app-with-nextjs-and-aws-amplify-59ld"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>January, 2023</ArticleDate>
            <ArticleDescription>
              React 18 consists of some cool new features added to the
              open-source JavaScript library.
            </ArticleDescription>
          </ArticleContents>

          <ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>
                Getting started with AWS Amplify
              </ArticleTitle>
              <Link
                href="https://dev.to/aws-builders/getting-started-with-aws-amplify-3gp9"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>January, 2023</ArticleDate>
            <ArticleDescription>
              AWS Amplify is a powerful development platform for building secure, scalable mobile and web applications.
            </ArticleDescription>
  </ArticleContents>

          <ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>
                Build a Shopping Cart with NextJS, Xata and Cloudinary
              </ArticleTitle>
              <Link
                href="https://dev.to/hackmamba/build-a-shopping-cart-with-nextjs-xata-and-cloudinary-13k"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>November, 2022</ArticleDate>
            <ArticleDescription>
              Learn how to build a shopping cart with NextJS, Xata and Cloudinary.
            </ArticleDescription>
          </ArticleContents>
        </ArticleContentContainer>
        <div>
          <Link href="https://annysah.hashnode.dev" passHref>
            <ArticleLink>
              <a>View more articles</a>
              <MdArrowRightAlt
                style={{ marginLeft: "0.2rem", fontSize: "1.5rem" }}
              />
            </ArticleLink>
          </Link>
        </div>
      </ArticleContainer>
    </>
  );
};

export default Articles;
