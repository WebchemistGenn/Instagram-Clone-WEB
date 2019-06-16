import { useState } from 'react'

export default (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue)

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event
    setValue(value)
  }
  return { value, onChange, setValue }
}
