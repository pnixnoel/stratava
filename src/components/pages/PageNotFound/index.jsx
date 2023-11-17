import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ErrorMessage = styled.span`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #92e3a9;
  font-size: 16px;
`;

export default function PageNotFound() {
  return (
    <Container>
      <ErrorMessage>Oops! No page here</ErrorMessage>
      <StyledLink to="/">
        <span>Take me back home</span>
      </StyledLink>
    </Container>
  );
}
