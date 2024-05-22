import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [incrementOrDecrementValue, setIncrementOrDecrementValue] = useState('1')

  const handleValueChange = (e) => {
    setIncrementOrDecrementValue(e.target.value)
  }

  const incrementCount = () => {
    const value = parseInt(incrementOrDecrementValue)
    if (!isNaN(value)) {
      setCount((count) => count + value)
    }
  }

  const decrementCount = () => {
    const value = parseInt(incrementOrDecrementValue)
    if (!isNaN(value)) {
      setCount((count) => count - value)
    }
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setText(newValue)
  
    const parsedValue = parseInt(newValue)
    if (!isNaN(parsedValue)) {
      setCount(parsedValue)
    }
  }

  const resetValues = () => {
    setCount(0)
    setText('')
    setIncrementOrDecrementValue('1')
  }

  return (
    <div>
      <span className="counter">{count}</span> <br />

      <input onChange={handleInputChange} type="text" placeholder="Introduce el valor inicial del contador" value={text} className="input"/> <br />

      <button className="button" onClick={incrementCount}> Incrementar </button>

      <p>¿En cuántas unidades desea incrementar?</p>
      <input onChange={handleValueChange} type="text" value={incrementOrDecrementValue} /> <br />


      <button className="button" onClick={decrementCount}> Decrementar </button>

      <p>¿En cuántas unidades desea incrementar?</p>
      <input onChange={handleValueChange} type="text" value={incrementOrDecrementValue} />  <br />

      <input onClick={resetValues} type="button" value='RESTAURAR VALORES' /> 
    </div>
  )
}

export default Counter