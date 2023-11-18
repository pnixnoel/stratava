import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0rem 8rem;
`;
const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;
  padding: 3rem 0rem 1rem;
`;

export default function Layout({hasContactUs, headingMessage = [], children}) {
  return (
    <Container>
        <Header hasContactUs={hasContactUs} headingMessage={headingMessage} />
        <MainContent>
            {children}
        </MainContent>
        <Footer />
    </Container>
  );
}

Layout.propTypes = {
    hasContactUs: PropTypes.bool,
    headingMessage: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired
}
