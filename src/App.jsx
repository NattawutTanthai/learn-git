import React from 'react'
import cat from './assets/IMG_6064.jpg'

function App() {
  return (
    <>
      <h1>My portfolio</h1>
      <p>Welcome to my portfolio</p>
      <p>Fullname : Rattanabucha Nattawut</p>
      <p>Nickname : Tan</p>
      <p>Skills : HTML , CSS , JavaScript</p>
      <img src={cat} alt="cat" width={100} />
      <p>Bye Bye</p>
      <p>Bye2 Bye2</p>
    </>
  )
}

export default App