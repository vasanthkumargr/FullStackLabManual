import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

  const handleNum = (num) => {
    setDisplay(display === '0' ? String(num) : display + num)
  }

  const handleOp = (op) => {
    setEquation(display + ' ' + op + ' ')
    setDisplay('0')
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  const handleEqual = () => {
    try {
      // Note: eval is generally unsafe but standard for simple calculator assignments
      // A safer alternative would be writing a parser, but sticking to assignment scope
      const fullEq = equation + display
      // eslint-disable-next-line no-eval
      const result = eval(fullEq)
      setDisplay(String(result))
      setEquation('')
    } catch (e) {
      setDisplay("Error")
      setEquation('')
    }
  }

  return (
    <div className="container">
      <h1>Task D: Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="equation">{equation}</div>
          <div className="current">{display}</div>
        </div>
        <div className="keypad">
          <button onClick={handleClear} className="clear">AC</button>
          <button onClick={() => handleOp('/')} className="op">/</button>
          <button onClick={() => handleOp('*')} className="op">×</button>
          <button onClick={() => handleOp('-')} className="op">-</button>

          <button onClick={() => handleNum(7)}>7</button>
          <button onClick={() => handleNum(8)}>8</button>
          <button onClick={() => handleNum(9)}>9</button>
          <button onClick={() => handleOp('+')} className="op">+</button>

          <button onClick={() => handleNum(4)}>4</button>
          <button onClick={() => handleNum(5)}>5</button>
          <button onClick={() => handleNum(6)}>6</button>
          <button onClick={handleEqual} className="equal">=</button>

          <button onClick={() => handleNum(1)}>1</button>
          <button onClick={() => handleNum(2)}>2</button>
          <button onClick={() => handleNum(3)}>3</button>
          <button onClick={() => handleNum(0)} className="zero">0</button>
          <button onClick={() => handleNum('.')}>.</button>
        </div>
      </div>
    </div>
  )
}

export default App
