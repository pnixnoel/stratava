import styled from "styled-components";
import ContactForm from "../../ContactForm";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem 1rem;
`;
const Heading = styled.span`
  font-size: 24px;
`;

const Form = styled.span`
  width: 50%;
  margin: 0 auto;
`;

export default function Contact() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Form>
        <ContactForm buttonCenter />
      </Form>
    </Container>
  );
}
