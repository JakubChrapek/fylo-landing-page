/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.module.scss"
import logo from "../images/logo.svg"
import iconPhone from "../images/icon-phone.svg"
import iconMail from "../images/icon-email.svg"
import iconFacebook from "../images/icon-facebook.svg"
import iconTwitter from "../images/icon-twitter.svg"
import iconInstagram from "../images/icon-instagram.svg"

const StyledWrapper = styled.div`
  background-color: hsl(243, 87%, 12%);
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`

const StyledFooter = styled.footer`
  max-width: 1440px;
  width: 100%;
  padding: 0 5rem;
  color: #fff;
`

const ImgWrapper = styled.div`
  width: 100%;
  display: block;
  margin-top: 0;
`

const StyledImg = styled.img`
  width: 10rem;
  filter: grayscale(100%);
`

const StyledListsWrapper = styled.div`
  display: flex;
`
const StyledList = styled.ul`
  list-style-type: none;
  width: 25%;
  display: inline-block;
  margin-top: 2rem;
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
  }
`

const StyledIcon = styled.img`
  width: 1rem;
  margin-right: 1.2rem;
`

const SocialIcon = styled(StyledIcon)`
  border: 1px solid white;
  border-radius: 100%;
  width: 2rem;
  padding: 0.4rem;
  margin-top: 0;
  transition: transform .15s ease-in-out;  
  :hover {
    transform: scale(1.03);
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
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
                  <a href=""><SocialIcon src={iconFacebook} /></a>
                  <a href=""><SocialIcon src={iconTwitter} /></a>
                  <a href=""><SocialIcon src={iconInstagram} /></a>
              </StyledList>
            </StyledListsWrapper>
          </StyledFooter>
        </StyledWrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
