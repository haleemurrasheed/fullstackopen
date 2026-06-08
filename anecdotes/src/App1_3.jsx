// 1.3: Anecdotes step1
import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place.',
]



const App = () => {
  const [selected, setSelected] = useState(0)
  //const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  //const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [votes, setVotes] = useState(Array.from({ length: anecdotes.length }, () => 0))
 
  const handleNext = () => {
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length)
    } while (randomIndex === selected)
    setSelected(randomIndex)
  }
  
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  return (  
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
    </>
  )
}
export default App