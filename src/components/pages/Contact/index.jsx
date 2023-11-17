import styled from "styled-components";
import ContactForm from "../../ContactForm";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 6rem;
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
        <ContactForm ButtonCenter />
      </Form>
    </Container>
  );
}
