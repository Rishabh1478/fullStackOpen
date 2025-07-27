import { useState } from 'react'
import './App.css'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0) ;
  const [bad, setBad] = useState(0);

  const GiveFeedbackHeader = () => {
    return <div>
      <h2>Give Feedback</h2>
      <button onClick={() => {setGood(good + 1)}}>good</button>
      <button onClick={() => {setNeutral(neutral + 1)}}>neutral</button>
      <button onClick={() => {setBad(bad + 1)}}>bad</button>
    </div>
  }
  const Stats = () => {
    return <div>
      <h1>statistics</h1>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>all: {all}</li>
        <li>average: {avg}</li>
        <li>positive: {positive}%</li>
      </ul>
    </div>
  }
  const all = good + neutral + bad;
  const avg = all/3;
  const positive = good/all * 100;
  return (
    <>
      <GiveFeedbackHeader />
      <Stats />
    </>
  )
}

export default App
