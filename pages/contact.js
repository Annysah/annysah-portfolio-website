import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiLink } from "react-icons/bi";

const ContactContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif;

  @media screen and (max-width: 767px) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

const ContactHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;

  span {
    color: #f9af14;
  }
  
`;

const ContactContent = styled.div`
  text-align: left;
  font-size: 1.2rem;
  padding: 0 3rem;
  line-height: 2;
  margin-top: -2rem;

  @media screen and (max-width: 767px) {
    //padding: 0 4rem;
    font-size: 0.95rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 4.5rem;
    font-size: 1.1rem;
  }
`;

const ContactLink = styled.div`
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.fontColor};
  }
`;

const Contact = ({ themes }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactContainer>
        <ContactHeading>
          contact<span>.</span>
        </ContactHeading>
        <ContactContent>
          <p>
            Have an opportunity for me? I'd be glad to have a conversation about
            it.{" "}
          </p>
          <p>
            Send me an email on:
            <span style={{ display: "inline-block", marginLeft: "5px" }}>
              <Link href="/" passHref>
                <ContactLink>
                  <a
                    style={{ borderBottom: "2px solid #f0f0f0" }}
                  >
                    anisatakinbani13@gmail.com
                  </a>
                </ContactLink>
              </Link>
            </span>
          </p>
          <p>You can also find me on other platforms:</p>
          <div>
            <Link href="https://github.com/Annysah" passHref>
              <ContactLink>
                <a>&#8226; Github</a>
                <BiLink style={{ marginLeft: "0.2rem" }} />
              </ContactLink>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/AnisatAkinbani" passHref>
              <ContactLink>
                <a>&#8226; Twitter</a>
                <BiLink style={{ marginLeft: "0.2rem" }} />
              </ContactLink>
            </Link>
          </div>
          <div>
            <Link href="https://linkedin.com/in/anisatakinbani" passHref>
              <ContactLink>
                <a>&#8226; LinkedIn</a>
                <BiLink style={{ marginLeft: "0.2rem" }} />
              </ContactLink>
            </Link>
          </div>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
