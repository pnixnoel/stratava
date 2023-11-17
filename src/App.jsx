import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
