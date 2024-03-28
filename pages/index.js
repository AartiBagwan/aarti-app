import MyFirstComponent from '@/components/MyFirstComponent'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <h1>Hello world
      </h1>
      <Link href='/home'>Home page</Link>
      <MyFirstComponent/>
     
    </div>
  )
}

export default index