import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ArticleContainer = styled.div`
  //padding: 3rem 0.5rem;
  //margin-top: -10rem;
  //height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 349px) {
    overflow-y: visible;
    margin: 11rem 1.1rem 8rem;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    overflow-y: visible;
    margin: 8rem 1.2rem 7rem;
  }

  @media screen and (min-width: 768px) {
    overflow-y: visible;
    margin: 6rem 1.1rem 4rem;
  }
`;

const ArticleHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;

  span {
    color: #f9af14;
    font-size: 2.1rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.7rem;
  }
`;

const ArticleContentContainer = styled.div`
  margin-top: -10px;
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

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const ArticleDate = styled.p`
  font-size: 0.8rem;
`;

const ArticleDescription = styled.p`
  font-size: 0.85rem;
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
`

const Articles = ({ themes }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <ArticleContainer>
        <ArticleHeading>
          articles<span>.</span>
        </ArticleHeading>

        <ArticleContentContainer>
          <ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>
                GraphQL API Requests with React, Typescript and GraphQL Codegen
              </ArticleTitle>
              <Link
                href="https://annysah.hashnode.dev/graphql-api-requests-with-typescript-react-query-and-graphql-code-generator-ckxx799pp045du4s1fdvyacj5"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>January, 2022</ArticleDate>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              bibendum nisi adipiscing odio.
            </ArticleDescription>
          </ArticleContents>

          {/*<ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>
                7 Awesome React UI Component Libraries
              </ArticleTitle>
              <Link
                href="https://annysah.hashnode.dev/7-awesome-react-ui-component-libraries-ckxhmzxfz02fqhts170u43snt"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>December, 2021</ArticleDate>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              bibendum nisi adipiscing odio.
            </ArticleDescription>
  </ArticleContents>*/}

          <ArticleContents>
            <ArticleContentTop>
              <ArticleTitle>
                Build a Sidebar Menu with React, Typescript and Styled
                Components
              </ArticleTitle>
              <Link
                href="https://annysah.hashnode.dev/build-a-sidebar-menu-with-react-typescript-and-styled-components-ckwkykpm80hs7gns112nycvvy"
                passHref
              >
                <ArticleArrow>
                  <a>
                    <BsBoxArrowUpRight />
                  </a>
                </ArticleArrow>
              </Link>
            </ArticleContentTop>
            <ArticleDate>November, 2021</ArticleDate>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              bibendum nisi adipiscing odio.
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
