import React from 'react'
import styled from 'styled-components'

const Container = styled.input`
  border: 0;
  border: ${p => p.theme.boxBorder};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => p.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0 15px;
`

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
}: {
  placeholder?: string
  required?: boolean
  value?: any
  onChange?: any
  type?: string
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
)

export default Input
