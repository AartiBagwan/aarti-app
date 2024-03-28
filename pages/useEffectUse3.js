
import { useState, useEffect } from 'react'
import React from 'react'

const useEffectUse3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products')
            const productData = await response.json();
            console.log(productData.products[0].title)
            setData(productData.products);
        }
        fetchData();
    }, []);

    return (
        <div>
          { 
            data.map((f) => {
            return (
              <>
                <h3>{f.id} <br /> {f.title}  </h3>
                <p>{f.rating}</p>
              </>
    
            )
          })}
        </div>
      )
    }
export default useEffectUse3
