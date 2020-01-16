import React from "react"
import styled from "styled-components"

import Image from "../components/image"

import iconQuotes from "../images/icon-quotes.svg"

const StyledCard = styled.div`
  width: 50%;
  max-width: 500px;
  min-width: 300px;
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 #dedede;
  @media (max-width: 550px) {
    width: calc(100% - 4rem);
    max-width: unset;
    min-width: unset;
    margin: 3.5rem 0 0;
    justify-self: center;
  }
`

const StyledCardText = styled.div`
  margin-top: 0.5rem;
  .text-container {
    padding-right: 0;
    margin-top: 0;
    font-size: 0.75rem;
    letter-spacing: 0.8px;
    line-height: 1.2rem;
    @media (max-width: 550px) {
      font-size: 0.8rem;
      line-height: 1.4rem;
    }
  }
`

const StyledTestimonialsContainer = styled.div`
  display: flex;
  width: 100%;
  .testimonials-image {
    width: 12.5%;
    margin-right: 0.5rem;
    @media (max-width: 550px) {
      width: 9%;
      min-width: 25px;
    }
    img {
      margin-top: 0;
      border-radius: 100%;
    }
  }
  .testimonials-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 0;
    p {
      margin-top: 0;
      padding-right: 0;
    }
    .name {
      font-weight: 700;
      font-size: 0.65rem;
      line-height: 1rem;
    }
    .position {
      font-size: 0.55rem;
      line-height: 1rem;
    }
  }
`

export default () => (
  <StyledCard>
    <img src={iconQuotes} alt='"' />
    <StyledCardText>
      <p className="text-container">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
    </StyledCardText>
    <StyledTestimonialsContainer>
      <div className="testimonials-image">
        <Image />
      </div>
      <div className="testimonials-text">
        <p className="name">Kyle Burton</p>
        <p className="position">Founder & CEO, Huddle</p>
      </div>
    </StyledTestimonialsContainer>
  </StyledCard>
)
