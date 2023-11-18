import styled from "styled-components";
import About1 from "../../../assets/illustrations/about-1.svg";
import About2 from "../../../assets/illustrations/about-2.svg";

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

export default function About() {
  return (
    <Container>
      <Heading>About Us</Heading>

      <Sections>
        <Description>
          <Content>
            <span>
              We are a dynamic service-based technology company, driven by a
              passionate team of tech enthusiasts dedicated to transforming
              ideas into innovative solutions. Specializing in the development
              of web applications, mobile apps, cloud solutions, and meticulous
              wireframes, our small yet adept team thrives on the challenges of
              the digital landscape. Our mission is to assist clients in
              navigating the ever-evolving tech realm, offering tailored
              solutions that seamlessly integrate creativity and functionality.
              With a client-centric approach, we prioritize understanding
              individual needs and deliver cutting-edge products that exceed
              expectations. At our core, we are problem solvers, committed to
              leveraging technology to empower businesses and individuals alike.
            </span>
          </Content>
          <Image>
            <img src={About1} />
          </Image>
        </Description>
      </Sections>
      <Sections>
        <Description>
          <Image>
            <img src={About2} />
          </Image>
          <Content>
            <span>
              At the heart of our ethos lies a commitment to staying at the
              forefront of technological advancements. Our constant pursuit of
              knowledge and innovation ensures that we not only keep pace with
              industry trends but also anticipate and adapt to the emerging
              landscape. Collaborating closely with our clients, we go beyond
              being mere service providers; we become strategic partners, deeply
              invested in the success of their ventures. Transparency and
              communication are the pillars of our client relationships,
              fostering a collaborative environment where ideas flourish, and
              goals are not just met but exceeded. As a company, we foster a
              culture of continuous learning, where each team member is
              encouraged to push boundaries and explore novel solutions. We
              believe that in the rapidly evolving world of technology,
              adaptability is key, and we embrace change as an opportunity for
              growth. Together, we embark on a journey of innovation, where
              challenges are viewed as stepping stones to new possibilities, and
              every project is an opportunity to redefine excellence in
              technology solutions.
            </span>
          </Content>
        </Description>
      </Sections>
    </Container>
  );
}
