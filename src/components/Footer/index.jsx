import styled from "styled-components";

const Container = styled.div`
  background-color: #92e3a9;
  padding: 1rem 8rem;
  display: flex;
  justify-content: center;
  height: 72px;
  align-items: center;
  width: 100%;
`;

export default function Footer() {
  return (
    <Container>
      <span>© Stratava Solutions - 2023</span>
    </Container>
  );
}
