import { useState } from 'react'
import './App.css'

let run = 0
function calcCount() {
  run += 5
  console.log('calc count', run);
  return run
}


function App() {
  let i = 0
  const [showMore, setShowMore] = useState(false)
  const [count, setCount] = useState(0)
  const [name, setName] = ('')

  function handleIncreaseClick() {
    setCount(count + 1)
    i += 5
  }

  console.log({ count, i });


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseClick}>Increase count</button>
      {showMore && <p>{name}</p>}
    </div>
  )
}

export default App
