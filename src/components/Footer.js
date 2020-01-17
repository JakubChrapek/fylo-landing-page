import React from 'react'
import {Link} from 'gatsby'
import logo from "../images/logo.svg"
import iconPhone from "../images/icon-phone.svg"
import iconMail from "../images/icon-email.svg"
import iconFacebook from "../images/icon-facebook.svg"
import iconTwitter from "../images/icon-twitter.svg"
import iconInstagram from "../images/icon-instagram.svg"
import styled from "styled-components"

const StyledWrapper = styled.div`
  background-color: hsl(263, 95%, 16%);
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  @media (max-width: 770px) {
    padding: 5rem 0 3rem;
  }
`

const StyledFooter = styled.footer`
  max-width: 1440px;
  width: 100%;
  padding: 0 5rem;
  color: #fff;
  @media (max-width: 550px) {
      padding: 0 3rem;
    }
`

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
  @media (max-width: 770px) {
    justify-content: center;
    
  }
  @media (max-width: 550px) {
    justify-content: flex-start;
  }
`

const StyledImg = styled.img`
  width: 10rem;

    @media (max-width: 770px) {
      width: 15rem;
    }
`

const StyledListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const StyledList = styled.ul`
  list-style-type: none;
  width: 25%;
  display: flex;
  flex-direction: column;
    margin-top: 2rem;
    padding-left: 3rem;
  
  :last-child {
    align-items: flex-start;
    flex-direction: row;
  }
  :first-child {
    padding-left: 0;
  }

  a {
    margin-top: 0;
  }

  @media (max-width: 960px) {
    width: 33%;
    align-items: center;
    padding-left: 0;
    :last-child {
      margin-top: 3rem;
      padding-left: 0;
      width: 100%;
      justify-content: center;
    }
    @media (max-width: 550px) {
      align-items: flex-start;

    }
  }

  @media (max-width: 770px) {
    width: 100%;
    margin-top: 2.5rem;
    position: relative;
    margin-bottom: 1.5rem;
    
  }
  
`

const StyledListItem = styled.li`
  font-size: 0.9rem;
  color: #ddd;

  a {
    text-decoration: none;
    color: #ddd;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0px;
      height: 1px;
      background-color: #fff;
      width: 100%;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.2s ease-in-out;
    }
    :hover::before {
      transform: scaleX(1);
    }
    @media (max-width: 770px) {
      display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span {
      margin-top: 0;
    }
    }
  }

  @media (max-width: 770px) {
    font-size: 1.25rem;
  }
`

const StyledIcon = styled.img`
  width: 1rem;
  margin-right: 1.5rem;
  @media (max-width: 770px) {
    width: 1.5rem;
  }
`

const SocialIcon = styled(StyledIcon)`
  border: 1px solid white;
  border-radius: 100%;
  width: 2rem;
  padding: 0.4rem;
  margin-right: ${({noMargin}) => noMargin ? '0' : '1.5rem'};

  margin-top: 0;
  transition: transform .15s ease-in-out;  
  :hover {
    transform: scale(1.03);
  }

  @media (max-width: 770px) {
    width: 2rem;
      margin-right: ${({noMargin}) => noMargin ? '0' : '0.8rem'};

  }
`


export default () => (
<StyledWrapper>
          <StyledFooter>
            <ImgWrapper>
              <StyledImg src={logo} alt="Fylo" />
            </ImgWrapper>
            <StyledListsWrapper>
              <StyledList>
                <StyledListItem>
                  <a href="tel:+15431234567">
                    <StyledIcon src={iconPhone} />
                    <span>Phone: +1-543-123-4567</span>
                  </a>
                </StyledListItem>
                <StyledListItem>
                  <a href="mailto:example@fylo.com">
                    <StyledIcon src={iconMail} />
                    <span>example@fylo.com</span>
                  </a>
                </StyledListItem>
              </StyledList>
              <StyledList>
                <StyledListItem>
                  <Link to="/">About Us</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link to="/">Jobs</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link to="/">Press</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link to="/">Blog</Link>
                </StyledListItem>
              </StyledList>
              <StyledList>
                <StyledListItem>
                  <Link to="/">Contact Us</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link to="/">Terms</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link to="/">Privacy</Link>
                </StyledListItem>
              </StyledList>
              <StyledList>
                  <a href="https://facebook.com/kryptonum"><SocialIcon src={iconFacebook} alt="facebook.com/kryptonum"/></a>
                  <a href="https://twitter.com"><SocialIcon src={iconTwitter} alt="twitter icon"/></a>
                  <a href="https://instagram.com/kryptonum.studio"><SocialIcon noMargin src={iconInstagram} alt="instagram.com/kryptonum.studio"/></a>
              </StyledList>
            </StyledListsWrapper>
          </StyledFooter>
        </StyledWrapper>
)
