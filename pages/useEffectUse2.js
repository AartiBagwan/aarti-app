import React from 'react'
import { useEffect, useState } from 'react'
const useEffectUse2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const productData = await response.json()
      // console.log(productData);
      console.log(productData.products[0].title);
      setData(productData.products)
    }

    fetchData();
  }, [])
  return (
    <div>
      {data.map((el) => {
        return (
          <>

            <h3>{el.id} <br /> {el.title}  </h3>
            <p>{el.rating}</p>
          </>

        )
      })}
    </div>
  )
}

export default useEffectUse2
