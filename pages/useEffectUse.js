import React, { useEffect } from 'react'
import { useState } from 'react'
const useEffectUse = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    },[])
    return (
        <div>
            <h1>I am rendered {count} times</h1>
        </div>
    )
}

export default useEffectUse
