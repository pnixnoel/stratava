import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #92e3a9;
  align-items: center;
  padding: 1rem 6rem;
`;

const Title = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #000;
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function Header() {
  return (
    <Container>
      <Title to="/">
        <span>Stratava</span>
      </Title>
      <NavigationContainer>
        <NavigationLink to="/services">
          <span>Services</span>
        </NavigationLink>
        <NavigationLink to="/about">
          <span>About</span>
        </NavigationLink>
        <NavigationLink to="/contact">
          <span>Contact</span>
        </NavigationLink>
      </NavigationContainer>
    </Container>
  );
}
