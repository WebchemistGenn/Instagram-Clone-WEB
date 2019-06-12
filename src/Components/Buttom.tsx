import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${p => p.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${p => p.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
`

const Button = ({ text }: { text: string }) => <Container>{text}</Container>

export default Button
