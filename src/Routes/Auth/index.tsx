import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../Components/Input'
import Button from '../../Components/Buttom'
import useInput from '../../Hooks/useInput'

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  ${props => props.theme.whiteBox};
  border-radius: 0px;
`

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`

const Link = styled.span`
  color: ${p => p.theme.blueColor};
  cursor: pointer;
`

const Form = styled(Box)`
  padding: 40px 40px 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`

export default () => {
  const [action, setAction] = useState('logIn')
  const username = useInput('')
  const password = useInput('')
  const firstname = useInput('')
  const lastname = useInput('')
  const email = useInput('')

  return (
    <Wrapper>
      <Form>
        {action === 'logIn' ? (
          <form>
            <Input placeholder={'Username'} {...username} />
            <Input placeholder={'Password'} {...password} type='password' />
            <Button text={'Log in'} />
          </form>
        ) : (
          <form>
            <Input placeholder={'First name'} {...firstname} />
            <Input placeholder={'Last name'} {...lastname} />
            <Input placeholder={'Email'} {...email} type='email' />
            <Input placeholder={'Username'} {...username} />
            <Input placeholder={'Password'} {...password} />
            <Button text={'Sign up'} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === 'logIn' ? (
          <>
            Don't have an account?{' '}
            <Link onClick={() => setAction('signUp')}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{' '}
            <Link onClick={() => setAction('logIn')}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  )
}
