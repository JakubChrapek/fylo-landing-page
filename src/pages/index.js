import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section-two-columns"
import EmailInput from "../components/emailInput"
import Card from "../components/Card"
import Access from "../components/Access"

import illustration1 from "../images/illustration-1.svg"
import illustration2 from "../images/illustration-2.svg"
import greenArrow from "../images/icon-arrow.svg"

const GreenLink = styled(Link)`
  color: hsl(170, 45%, 43%);
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  @media (max-width: 550px) {
    margin-top: 3rem;
    justify-content: center;
  }

  .svgIcon {
    margin-left: 0.4rem;
    margin-top: 0;
    width: 1.2rem;
    height: 1.2rem;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.8;
    }
  }

  .green {
    transition: color 0.2s ease-in-out;
    position: relative;
    :hover {
      color: hsl(190, 55%, 53%);
      ::before {
        background-color: hsl(210, 65%, 63%);
        transform: scaleX(1);
      }
    }
    ::before {
      content: "";
      width: calc(100% + 1.6rem);
      height: 1px;
      background-color: hsl(170, 45%, 43%);
      position: absolute;
      left: 0;
      bottom: -5px;
      transform: scaleX(0.2);
      transform-origin: left;
      transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      title="All your files in one secure location, accessible anywhere."
      img={illustration1}
    >
      <p>
        Fylo stores your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <EmailInput
        placeholder="Enter your email..."
        buttonText="Get Started"
      ></EmailInput>
    </Section>
    <Section
      title="Stay productive, wherever you are"
      img={illustration2}
      withBg="true"
    >
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
      <GreenLink to="/">
        <span className="green">See How Fylo works</span>
        <img className="svgIcon" src={greenArrow} alt="green arrow"/>
      </GreenLink>
      <Card></Card>
    </Section>
    <Access />
  </Layout>
)

export default IndexPage
