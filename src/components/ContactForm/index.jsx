import styled from "styled-components";
import Button from "../Primitives/Button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 10px 0;
  height: 34px;
  padding-left: 10px;
`;
const TextArea = styled.textarea`
  margin: 10px 0;
  height: 56px;
  padding-top: 10px;
  padding-left: 10px;
`;

export default function ContactForm({buttonCenter = false}) {
  return (
    <Container>
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="text" placeholder="Subject" />
      <TextArea placeholder="Enter your message" />
      <Button buttonCenter={buttonCenter}>SEND</Button>
    </Container>
  );
}
