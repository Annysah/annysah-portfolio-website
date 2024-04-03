import styled from "styled-components";
import Image from 'next/image';
import Link from "next/link";

const ProjectCard = styled.div`
    background-color: ${({ theme }) => theme.cardBody};
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    width: 450px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 992px) {
    padding: 1rem;
    width: 350px;
  }

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
    width: 300px;
  }
`

const ProjectImage = styled.div`
    border-radius: .15rem;
    margin-bottom: 2rem;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.h2`
    @media screen and (max-width: 768px) {
    margin-bottom: 0.25rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`

const ProjectDescription = styled.p`
  font-family: "Work Sans", sans-serif;
    @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`

const ProjectStacks = styled.div`
    @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`

const ProjectDemo = styled.div`

`

const ProjectDemoButton = styled.button`
    background-color: #111;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.85rem;
    background: #111;
`

const ProjectItems = ({ item }) => {
  return (
    <>
        <ProjectCard>
            <ProjectImage>
                <Image src={item.image} alt={item.alt} width={400} height={200} />
            </ProjectImage>

            <ProjectTitle>{item.title}</ProjectTitle>

            <ProjectDescription>{item.description}</ProjectDescription>

            <ProjectStacks>
                <p>Built with: {item.stack}</p>
            </ProjectStacks>

            <ProjectDemo>
                <Link href={item.demo}>
                    <a>
                        <ProjectDemoButton>Demo</ProjectDemoButton>
                    </a>
                </Link>
            </ProjectDemo>
        </ProjectCard>
    </>
  )
}

export default ProjectItems