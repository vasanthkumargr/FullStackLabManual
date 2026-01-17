import { useState } from 'react'
import './App.css'

function App() {
    const [number, setNumber] = useState('')
    const [sum, setSum] = useState(null)

    const calculateSum = (numStr) => {
        const cleanNum = numStr.replace(/[^0-9]/g, '')
        let total = 0
        for (let char of cleanNum) {
            total += parseInt(char)
        }
        return total
    }

    const handleChange = (e) => {
        const val = e.target.value
        setNumber(val)
        if (val === '') {
            setSum(null)
        } else {
            setSum(calculateSum(val))
        }
    }

    return (
        <div className="container">
            <h1>Task B: Sum of Digits</h1>

            <div className="card">
                <label>Enter a Number:</label>
                <input
                    type="number"
                    value={number}
                    onChange={handleChange}
                    placeholder="Type actual number..."
                />
                <p className="hint">Sum updates automatically</p>
            </div>

            {sum !== null && (
                <div className="results">
                    <h2>Sum of Digits: <span className="highlight">{sum}</span></h2>
                </div>
            )}
        </div>
    )
}

export default App
