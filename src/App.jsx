import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import Layout from "./components/Layout";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HomeHeaderContent = ["Get the help you need, every step of the way", <>Strategic Guidance, Seamless Navigation <br/> Your Path to Success</>, "Offshore development with an onshore customer experience"]

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Layout hasContactUs headingMessage={HomeHeaderContent}><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><PageNotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
