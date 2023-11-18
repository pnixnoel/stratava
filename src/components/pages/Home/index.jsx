import styled from "styled-components";
import ContactForm from "../../ContactForm";
import WhatWeDo from "../../../assets/illustrations/what-we-do.svg";
import WhoAreWe from "../../../assets/illustrations/who-are-we.svg";
import GetInTouch from "../../../assets/illustrations/get-in-touch.svg";
import Desktop from "../../../assets/icons/desktop.svg";
import Mobile from "../../../assets/icons/mobile.svg";
import Cloud from "../../../assets/icons/cloud.svg";
import Pencil from "../../../assets/icons/pencil.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.span`
  font-size: 24px;
`;

const Sections = styled.div``;
const Image = styled.div`
  width: 460px;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const Icon = styled.img`
  width: 36px;
`;

export default function Home() {
  return (
    <Container>
      <Sections>
        <Heading>What we do</Heading>
        <Description>
          <Content>
            <Icons>
              <IconWrapper>
                <Icon src={Desktop} />
                <span>Web Application</span>
              </IconWrapper>
              <IconWrapper>
                <Icon src={Mobile} />
                <span>Mobile Application</span>
              </IconWrapper>
              <IconWrapper>
                <Icon src={Cloud} />
                <span>Web Solution</span>
              </IconWrapper>
              <IconWrapper>
                <Icon src={Pencil} />
                <span>Wireframe</span>
              </IconWrapper>
            </Icons>
          </Content>
          <Image>
            <img src={WhatWeDo} />
          </Image>
        </Description>
      </Sections>
      <Sections>
        <Heading>Who are we?</Heading>
        <Description>
          <Image>
            <img src={WhoAreWe} />
          </Image>
          <Content>
            <span>
              We are a service-oriented tech company crafting web and mobile
              apps, cloud solutions, and wireframes. Our compact team of tech
              enthusiasts is dedicated to providing tailored solutions, working
              closely with clients to bring their ideas to life.
            </span>
          </Content>
        </Description>
      </Sections>
      <Sections>
        <Heading>Get in touch</Heading>
        <Description>
          <Content>
            <ContactForm />
          </Content>
          <Image>
            <img src={GetInTouch} />
          </Image>
        </Description>
      </Sections>
    </Container>
  );
}
