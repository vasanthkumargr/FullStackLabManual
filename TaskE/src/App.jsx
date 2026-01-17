import { useState, useEffect, useRef } from 'react'
import './App.css'
import confetti from 'canvas-confetti' // We won't install this to avoid complexity, but we'll simulate effects or use basic CSS animations

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+') // +, -
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("Let's Play!")

  const generateQuestion = () => {
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    // Keep it simple for kids: if subs, ensure positive
    if (Math.random() > 0.5) {
      setOperator('+')
      setNum1(n1)
      setNum2(n2)
    } else {
      setOperator('-')
      if (n1 > n2) {
        setNum1(n1)
        setNum2(n2)
      } else {
        setNum1(n2)
        setNum2(n1)
      }
    }
    setAnswer('')
    setMessage("What is the answer?")
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const checkAnswer = () => {
    let correct = 0
    if (operator === '+') correct = num1 + num2
    if (operator === '-') correct = num1 - num2

    if (parseInt(answer) === correct) {
      setMessage("YAY! Correct! 🎉")
      setScore(score + 10)
      setTimeout(generateQuestion, 1500)
    } else {
      setMessage("Oops! Try again! 🙈")
    }
  }

  return (
    <div className="container">
      <h1>Task E: Kids Math Game 🎮</h1>

      <div className="score-board">
        Score: {score}
      </div>

      <div className="game-card">
        <div className="question">
          <span className="num">{num1}</span>
          <span className="op">{operator}</span>
          <span className="num">{num2}</span>
          <span className="eq">=</span>
          <span className="q-mark">?</span>
        </div>

        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          className="answer-input"
        />

        <button onClick={checkAnswer} className="check-btn">Check!</button>

        <p className="message">{message}</p>
      </div>
    </div>
  )
}

export default App
