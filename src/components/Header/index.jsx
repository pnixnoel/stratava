import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "../Primitives/Button"

const contactUsHeight = "360px"
const headerHeight = "72px"
const navbarPadding = "8rem"
const navbarColor = "#92e3a9"

const Container = styled.div`
  background-color: ${navbarColor};
  padding: 0rem ${navbarPadding};
  width: 100%;
  transition: 0.5s all;
  height: ${({showContactUs}) => {
    if(showContactUs) {
      return contactUsHeight;
    }
    return headerHeight;
  }};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${headerHeight};
  position: fixed;
  left: 0;
  width: 100%;
  background-color: ${navbarColor};
`

const ContactUsContainer = styled.div`
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: 8rem;
  display: ${({showContactUs}) => showContactUs ? "flex" : "none"};
  opacity: ${({showContactUs}) => showContactUs ? "1" : "0"};
`


const Title = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: #000;
  padding-left: ${navbarPadding};
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: ${navbarPadding};
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 16px;
`;

const ContactUsTextWrapper = styled.div`
  margin-bottom: 2rem;
  height: 70px;
  position: relative;
  width: 100%;
`

const ContactUsText = styled.span`
  display: block;
  font-size: 36px;
  word-wrap: break-word;
  text-align: center;
  opacity: ${({show}) => show ? "1" : "0"};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  transition: 0.3s all ease-out;
`;

export default function Header({hasContactUs, headingMessage = []}) {
  const [headingMessageIdx, changeHeadingMessageIdx] = useState(0);

  // state to keep track of how many px scrolled
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);
  const handleScroll = () => {
    setCurrentScroll(window.scrollY);
  };
  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { 
  
    //Implementing the setInterval method 
    const interval = setInterval(() => {
      if(headingMessageIdx >= headingMessage.length - 1) {
        changeHeadingMessageIdx(0); 
      }else {
        changeHeadingMessageIdx(headingMessageIdx + 1); 
      }
    }, 2000); 

    //Clearing the interval 
    return () => clearInterval(interval); 
  }, [headingMessageIdx]); 

  const showContactUs = hasContactUs && currentScroll < 50;

  return (
    <Container showContactUs={showContactUs}>
      <NavContainer>
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
      </NavContainer>
      {
        hasContactUs &&
          <ContactUsContainer showContactUs={showContactUs}>
            <ContactUsTextWrapper>
            {headingMessage.map((hm, idx) => (
               <ContactUsText show={headingMessageIdx === idx}>
                {hm}
               </ContactUsText>
            ))}
             
            </ContactUsTextWrapper>
            <Button variant='light'>CONTACT US</Button>
          </ContactUsContainer>
      }
    </Container>
  );
}

Header.propTypes = {
  hasContactUs: PropTypes.bool,
  headingMessage: PropTypes.arrayOf(PropTypes.string),
}