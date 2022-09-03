import { useState } from 'react'

const StatisticLine = ({ counter, text }) => (
    <tr>
      <td>
        {text} {counter}
      </td>
    </tr>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = ({ data }) => {
  const {good, bad, neutral, all, average} =  data

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine counter={good} text='good' />
          <StatisticLine counter={neutral} text='neutral' />
          <StatisticLine counter={bad} text='bad' />
          <StatisticLine counter={all} text='all' />
          <StatisticLine counter={average / all} text='average' />
          <StatisticLine counter={((good / all) * 100) + ' %'} text='positive' />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const data = { good, neutral, bad, all, average }

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='netural' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics data={data} />
    </div>
  )
}

export default App