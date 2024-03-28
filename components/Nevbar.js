import React from 'react'
import { NavData } from './NavData'
import Link from 'next/link'

const Nevbar = () => {
  return (
    <>
    
    <div class="topnav" id="myTopnav">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    
    <div class="dropdown">
      <button class="dropbtn">Dropdown 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
    <a href="#about">About</a>
      </div>
      <br/><br/>
    
      <div className='DROPONE1'>
      {
        NavData.map((f) => {
            return(
                <Link href={f.link}> {f.title} </Link>
                
            )
        })
     }

    </div>
    

    <div className='DROPONE'>
     {
        NavData.map((f) => {
            return(
                <Link href={f.link}> {f.title} </Link>
                
            )
        })
     }

    
    </div>
  
    <div class="main">
  <h2>Sidebar Dropdown</h2>
  <p>Click on the dropdown button to open the dropdown menu inside the side navigation.</p>
  <p>This sidebar is of full height (100%) and always shown.</p>
  <p>Some random text..</p>
</div>


    </>
  )
}

export default Nevbar
