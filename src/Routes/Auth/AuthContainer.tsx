import React, { useState, FormEvent } from 'react'
import { useMutation } from 'react-apollo-hooks'
import AuthPresenter from './AuthPresenter'
import useInput from '../../Hooks/useInput'
import { LOG_IN, CREATE_ACCOUNT } from './AuthQuery'
import { toast } from 'react-toastify'

export default () => {
  const [action, setAction] = useState('logIn')
  const username = useInput('')
  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('yoon110@me.com')
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value },
  })

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  })

  const onLogin = async (event: FormEvent) => {
    event.preventDefault()
    if (email.value !== '') {
      try {
        const { data } = await requestSecretMutation()
        const { requestSecret } = data
        if (!requestSecret) {
          toast.error('You dont have an account yet, create one')
          setTimeout(() => setAction('signUp'), 3000)
        } else {
          // ! Secret 데이터 전달 OK
        }
      } catch (error) {
        toast.error("Can't request secret, try again")
      }
    } else {
      toast.error('Email is required')
    }
  }

  const onJoin = async (event: FormEvent) => {
    event.preventDefault()
    if (
      username.value !== '' &&
      email.value !== '' &&
      firstName.value !== '' &&
      lastName.value !== ''
    ) {
      try {
        const { data } = await createAccountMutation()
        const { createAccount } = data
        if (!createAccount) {
          toast.error("Can't create account")
        } else {
          toast.success('Account created! Log In now')
          setTimeout(() => setAction('logIn'), 3000)
        }
      } catch (error) {
        toast.error("Can't create account, try again")
      }
    } else {
      toast.error('All field are required')
    }
  }

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
      onJoin={onJoin}
    />
  )
}
