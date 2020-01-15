import React from "react"
import styled from "styled-components"

const StyledFrom = styled.form`
  margin-top: 1.6rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled.input`
  font-size: 0.8rem;
  margin-top: 0;
  height: 100%;
  padding: 0.7rem 0.9rem;
  border-radius: 2px;
`

const StyledEmail = styled(StyledInput)`
  width: 60%;
  font-size: 0.9rem;
  padding: 0.9rem 0.9rem 0.5rem;
  color: hsl(238, 22%, 44%);
  margin-right: 1rem;
  border: 1px solid hsl(238, 22%, 44%);
  ::placeholder {
    font-size: 0.85rem;
    color: lighten(hsl(238, 22%, 44%), 30%);
  }

  :focus {
    color: darken(hsl(238, 22%, 44%), 50%);
    border: 1px solid black;
  }
`

const StyledSubmit = styled(StyledInput)`
  width: 40%;
  border: 1px solid hsl(224, 93%, 58%);
  color: #fff;
  font-weight: 700;
  background-color: hsl(224, 93%, 58%);
  box-shadow: 1px 1px 4px 0px hsl(224, 93%, 58%);
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 2px 0px hsl(224, 93%, 58%);
    background-color: hsl(224,93%, 63%);
 }
`
export default ({ placeholder, buttonText }) => (
  <StyledFrom>
    <StyledEmail type="email" name="user_email" placeholder={placeholder} />
    <StyledSubmit type="submit" value={buttonText} />
  </StyledFrom>
)
