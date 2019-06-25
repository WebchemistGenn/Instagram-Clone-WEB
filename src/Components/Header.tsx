import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from './Input';
import { Logo, Compass, HeartEmpty, User } from './Icons'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
  padding: 25px 0;
  border: 0;
  border-radius: 0;
  border-bottom: ${p => p.theme.boxBorder};
  background-color: #fff;
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${p => p.theme.maxWidth};
  justify-content: center;
`;
const HeaderColumn = styled.div`
  width: 33%;
  justify-content: center;
  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;
const SearchInput = styled(Input)`
  width: 70%;
  height: auto;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  background-color: ${p => p.theme.bgColor};
  text-align: center;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default () => {
  const [search, setSearch] = useState('');
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo size={24} />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form>
            <SearchInput {...search} placeholder="Search" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  )
}
