import React, { useState } from 'react'
import Dashboard from '@/components/Dashboard'
import AboutUs from '@/components/AboutUs'
import Home from '@/components/Home'

const myPage = () => {
    const [value, setValue] = useState('nothing')

    return (
        <div>
            <button onClick={() => setValue('dash')}>Dashboard</button><br />
            <button onClick={() => setValue('home')}>Home</button><br />
            <button onClick={() => setValue('about')}>about us</button>
            <hr style={{ height: '100vh', position: 'absolute', top: '0', left: '100px' }}></hr>

            <div style={{ position: 'absolute', left: '150px', top: '10px' }}>
                {
                    value === 'dash' && <Dashboard />
                }
                {
                    value === 'home' && <Home />
                }
                {
                    value === 'about' && <AboutUs />
                }
            </div>
        </div>

    )
}

export default myPage
