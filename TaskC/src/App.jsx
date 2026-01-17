import { useState } from 'react'
import './App.css'

function App() {
  const [basicPay, setBasicPay] = useState('')
  const [calculated, setCalculated] = useState(null)
  const [grade, setGrade] = useState('')
  const [bonus, setBonus] = useState(null)

  const handleSalaryCalculation = () => {
    const basic = parseFloat(basicPay)
    if (isNaN(basic)) {
      alert("Please enter valid Basic Pay")
      return
    }
    const da = 0.30 * basic
    const hra = 0.10 * basic
    const special = 0.05 * basic
    const total = basic + da + hra + special

    setCalculated({
      basic, da, hra, special, total
    })
    // Reset subsequent calculations
    setGrade('')
    setBonus(null)
  }

  const handleCheckGrade = () => {
    if (!calculated) {
      alert("Calculate Salary first!")
      return
    }
    const total = calculated.total
    let g = ''
    if (total >= 10000 && total <= 20000) g = 'A'
    else if (total > 20000 && total <= 30000) g = 'B'
    else if (total > 30000 && total <= 40000) g = 'C'
    else if (total > 40000) g = 'EXC'
    else g = 'Not Eligible'
    setGrade(g)
  }

  const handleCheckBonus = () => {
    if (!grade || grade === 'Not Eligible') {
      alert("Check Grade first / No Bonus")
      return
    }
    const basic = calculated.basic
    let b = 0
    if (grade === 'A') b = 0.15 * basic
    else if (grade === 'B') b = 0.12 * basic
    else if (grade === 'C') b = 0.06 * basic
    else if (grade === 'EXC') b = 0.05 * basic // Requirement says "EX", logic implies EXC

    setBonus(b)
  }

  return (
    <div className="container">
      <h1>Task C: Employee Tax Calculator</h1>

      <div className="input-group">
        <label>Enter Basic Pay:</label>
        <input
          type="number"
          value={basicPay}
          onChange={(e) => setBasicPay(e.target.value)}
          placeholder="e.g. 25000"
        />
        <button onClick={handleSalaryCalculation}>Calculate Salary</button>
      </div>

      {calculated && (
        <div className="salary-slip">
          <h3>Salary Details</h3>
          <div className="row"><span>Basic:</span> <span>{calculated.basic.toFixed(2)}</span></div>
          <div className="row"><span>DA (30%):</span> <span>{calculated.da.toFixed(2)}</span></div>
          <div className="row"><span>HRA (10%):</span> <span>{calculated.hra.toFixed(2)}</span></div>
          <div className="row"><span>Special (5%):</span> <span>{calculated.special.toFixed(2)}</span></div>
          <div className="row total"><span>Total Salary:</span> <span>{calculated.total.toFixed(2)}</span></div>

          <div className="actions">
            <button className="secondary" onClick={handleCheckGrade}>Check Grade</button>
            {grade && <span className="grade-badge">Grade: {grade}</span>}
          </div>

          <div className="actions">
            <button className="secondary" onClick={handleCheckBonus}>Check Bonus</button>
            {bonus !== null && <span className="bonus-badge">Bonus: {bonus.toFixed(2)}</span>}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
