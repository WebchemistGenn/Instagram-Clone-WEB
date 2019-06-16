import React, { useState, FormEvent } from 'react'
import { useMutation } from 'react-apollo-hooks'
import AuthPresenter from './AuthPresenter'
import useInput from '../../Hooks/useInput'
import { LOG_IN } from './AuthQuery'

export default () => {
  const [action, setAction] = useState('logIn')
  const username = useInput('')
  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value },
  })

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (email.value !== '') {
      const {
        data: { requestSecret },
      } = await requestSecretMutation()
      console.log(requestSecret)
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
      onSubmit={onSubmit}
    />
  )
}
