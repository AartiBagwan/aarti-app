import React from 'react'
import { useContext, createContext } from 'react'
import { UserContext } from './Comp1'

 const userName=useContext(UserContext)

const Comp5 = () => {
  return (
    <div>
      <h2> hi {userName}! I am final component of this tree</h2>
    </div>
  )
}

export default Comp5
