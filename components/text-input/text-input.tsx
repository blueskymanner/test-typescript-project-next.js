import { useState } from 'react';
import styles from './text-input.module.scss'

type Props = {
  name: string;
  placeholder?: string;
  value: string;
  onChange: Function;
}

const TextInput = ({ name, placeholder, value, onChange }: Props) => {
  const [showLabel, setShowLabel] = useState(false)
  const [error, setError] = useState('')
  const handleChange = (e: any) => {
    onChange(e.target.value)
  }
  const handleFocus = () => {
    setShowLabel(true)
  }
  const handleBlur = () => {
    setShowLabel(false)
  }
  return (
    <div className={styles.container}>
      {
        showLabel || value !== '' ?
          <p>{placeholder}</p>
        :
          <p style={{visibility: 'hidden'}}>{placeholder}</p>
      }
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <input type="text" name={name} placeholder={showLabel ? '' : placeholder} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleBlur} />
        {
          value !== '' ?
            <img src="/assets/img/icon-check.png" alt='Check Icon' />
          :
            <img src="/assets/img/icon-check.png" alt='Check Icon' style={{visibility: 'hidden'}} />
        }
      </div>
      {
        error !== '' ?
          <p>{error}</p>
        :
          <p style={{visibility: 'hidden'}}>{'Something is wrong.'}</p>
      }
    </div>
  )
}

export default TextInput
