import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`
const List = styled.ul`
  display: flex;
`
const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`
const Link = styled.a`
  color: ${p => p.theme.darkBlueColor};
`
const Copyright = styled.span`
  color: ${p => p.theme.darkGreyColor};
`

export default () => {
  const list = [
    'ABOUT US',
    'SUPPORT',
    'PRESS',
    'API',
    'JOBS',
    'PRIVACY',
    'TERMS',
    'DIRECTORY',
    'PROFILES',
    'HASHTAGS',
    'LANGUAGE',
  ]
  return (
    <Footer>
      <List>
        {list.map(item => (
          <ListItem key={item}>
            <Link href='#'>{item}</Link>
          </ListItem>
        ))}
      </List>
      <Copyright>Instargram {new Date().getFullYear()} &copy;</Copyright>
    </Footer>
  )
}
