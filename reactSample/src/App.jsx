import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['call mom'])
  const [loggedIn, setLoggedIn] = useState(false)


  const handleClick = () => {
    // setLoggedIn(true)
    setLoggedIn(!loggedIn)
  }


  if(!loggedIn){
    return (
      <>
        <h1 id="heading">You are not logged in</h1>
        <div className='btn' onClick={handleClick}>click here to login</div>
      </>

    )
  }

  return (
    <h1 id="heading">Hello, user</h1>
  )
}



export default App
