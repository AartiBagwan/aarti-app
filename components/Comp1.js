import React, { useState, createContext } from 'react'
import Comp2 from './Comp2'

export const UserContext = createContext()

const Comp1 = () => {
    const [user, setUser] = useState('Aarti Bagwan')
    return (
        <UserContext.Provider value={user} >
            <div>

                <h1>Hello the user's name is {user} </h1>
                <Comp2 />

            </div>
        </UserContext.Provider>

    )
}

export default Comp1
