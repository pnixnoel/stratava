import styled from "styled-components";

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
const Button = styled.button`
  margin: 10px 0;
  width: 72px;
  height: 34px;
  background-color: #92e3a9;
  border: 1px solid;
  cursor: pointer;
  ${(props) => props.ButtonCenter && "margin: 10px auto;"};
`;

export default function ContactForm({ButtonCenter = false}) {
  return (
    <Container>
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="text" placeholder="Subject" />
      <TextArea placeholder="Message" />
      <Button ButtonCenter={ButtonCenter}>SEND</Button>
    </Container>
  );
}
