import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  if(todos.length === 0){
    return <h1 id="heading">there are no todos</h1>
  }

  return (
    <h1 id="heading">Hello</h1>
  )
}

export default App
