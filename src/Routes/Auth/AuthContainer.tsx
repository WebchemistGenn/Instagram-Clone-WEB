import React, { useState, FormEvent } from 'react'
import { useMutation } from 'react-apollo-hooks'
import AuthPresenter from './AuthPresenter'
import useInput from '../../Hooks/useInput'
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from './AuthQuery'
import { toast } from 'react-toastify'

export default () => {
  const [action, setAction] = useState('logIn')
  const secret = useInput('')
  const username = useInput('')
  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')
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

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    }
  })

  const localLogInMutation = useMutation(LOCAL_LOG_IN)

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
          toast.success('인증메일이 전송되었습니다.');
          setTimeout(() => setAction('confirm'), 3000)
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

  const onSecret = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const { data: { confirmSecret: token } } = await confirmSecretMutation()
      if (token !== "" || token !== undefined) {
        localLogInMutation({ variables: { token } })
      }
    } catch (error) {
      toast.error('Cant confirm secret')
    }

  }

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      secret={secret}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
      onJoin={onJoin}
      onSecret={onSecret}
    />
  )
}
