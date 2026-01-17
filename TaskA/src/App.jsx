import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('')
  const [results, setResults] = useState({
    factorial: null,
    fibonacci: null,
    isPrime: null
  })

  const calculateFactorial = (n) => {
    if (n < 0) return 'Invalid'
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) result *= i
    return result
  }

  const generateFibonacci = (n) => {
    if (n <= 0) return []
    if (n === 1) return [0]
    let series = [0, 1]
    while (series.length < n) {
      series.push(series[series.length - 1] + series[series.length - 2])
    }
    return series.slice(0, n)
  }

  const checkPrime = (n) => {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }

  const handleCompute = () => {
    const n = parseInt(number)
    if (isNaN(n)) {
      alert("Please enter a valid number")
      return
    }

    setResults({
      factorial: calculateFactorial(n),
      fibonacci: generateFibonacci(n).join(', '),
      isPrime: checkPrime(n) ? 'Yes' : 'No'
    })
  }

  return (
    <div className="container">
      <h1>Task A: Algorithms</h1>
      
      <div className="card">
        <label>Enter a Number:</label>
        <input 
          type="number" 
          value={number} 
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number..."
        />
        <div className="button-group">
            <button onClick={handleCompute}>Compute All</button>
        </div>
      </div>

      {results.factorial !== null && (
        <div className="results">
          <p><strong>Factorial:</strong> {results.factorial}</p>
          <p><strong>Fibonacci Series ({number} terms):</strong> {results.fibonacci}</p>
          <p><strong>Is Prime?</strong> {results.isPrime}</p>
        </div>
      )}
    </div>
  )
}

export default App
