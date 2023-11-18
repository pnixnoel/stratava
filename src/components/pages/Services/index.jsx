import styled from "styled-components";
import WebApp from "../../../assets/illustrations/web-app.svg";
import MobileApp from "../../../assets/illustrations/mobile-app.svg";
import Cloud from "../../../assets/illustrations/cloud.svg";
import Wireframe from "../../../assets/illustrations/wireframe.svg";

import AWS from "../../../assets/brands/aws.svg";
import Django from "../../../assets/brands/django.svg";
import JS from "../../../assets/brands/js.svg";
import TS from "../../../assets/brands/ts.svg";
import Mongo from "../../../assets/brands/mongo.svg";
import MySQL from "../../../assets/brands/mysql.svg";
import NextJS from "../../../assets/brands/nextjs.svg";
import NodeJS from "../../../assets/brands/nodejs.svg";
import ReactIcon from "../../../assets/brands/react.svg";
import ReactNativeIcon from "../../../assets/brands/react-native.svg";
import Python from "../../../assets/brands/python.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem 1rem;
`;
const Heading = styled.span`
  font-size: 24px;
`;

const Sections = styled.div``;
const Image = styled.div`
  width: 460px;
`;

const Content = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const TechPartners = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
const BrandLogo = styled.img`
  width: 48px;
`;

export default function Services() {
  return (
    <Container>
      <Sections>
        <Heading>Web Application</Heading>
        <Description>
          <Content>
            <span>
              Our full-stack web app development team harnesses the power of
              cutting-edge technologies such as React, Next.js, Django,
              JavaScript, Python, and robust databases to craft seamless and
              responsive applications. From conceptualization to deployment, we
              ensure a comprehensive approach, delivering solutions that not
              only meet but exceed expectations. Our commitment to quality
              extends to creating engaging and user-friendly interfaces,
              providing an unparalleled online experience.
            </span>
          </Content>
          <Image>
            <img src={WebApp} />
          </Image>
        </Description>
      </Sections>
      <Sections>
        <Heading>Mobile Application</Heading>
        <Description>
          <Image>
            <img src={MobileApp} />
          </Image>
          <Content>
            <span>
              Leveraging the versatility of React Native, we specialize in
              mobile app development that seamlessly translates ideas into
              functional and visually appealing applications. Our team combines
              creativity and technical expertise to ensure that each mobile app
              delivers a smooth user experience across different platforms,
              meeting the ever-evolving demands of the mobile landscape.
            </span>
          </Content>
        </Description>
      </Sections>
      <Sections>
        <Heading>Cloud Solution</Heading>
        <Description>
          <Content>
            <span>
              Our expertise extends to comprehensive cloud solutions,
              encompassing hosting and deployment with AWS (Amazon Web
              Services). We navigate the intricacies of cloud architecture to
              provide scalable, secure, and efficient hosting solutions. From
              seamless deployment to ongoing management, we optimize cloud
              resources to enhance performance, reliability, and overall
              operational efficiency for your applications.
            </span>
          </Content>
          <Image>
            <img src={Cloud} />
          </Image>
        </Description>
      </Sections>
      <Sections>
        <Heading>Wireframe</Heading>
        <Description>
          <Image>
            <img src={Wireframe} />
          </Image>
          <Content>
            <span>
              At the heart of our design process is the creation of meticulous
              wireframes using industry-leading tools such as Figma. These
              wireframes serve as the blueprint for your application, offering a
              visual representation of the user interface and functionality. By
              refining the user experience through careful planning and
              iteration, we ensure that the final product aligns perfectly with
              your vision.
            </span>
          </Content>
        </Description>
      </Sections>
      <Heading>Our Technology Stack</Heading>
      <TechPartners>
        <BrandLogo src={ReactIcon} />
        <BrandLogo src={ReactNativeIcon} />
        <BrandLogo src={NextJS} />
        <BrandLogo src={Django} />
        <BrandLogo src={NodeJS} />
        <BrandLogo src={AWS} />
        <BrandLogo src={JS} />
        <BrandLogo src={TS} />
        <BrandLogo src={Python} />
        <BrandLogo src={Mongo} />
        <BrandLogo src={MySQL} />
      </TechPartners>
    </Container>
  );
}
