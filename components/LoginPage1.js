import React from 'react'

const LoginPage1 = () => {
  return (
    <div>
    <form action="">
    <header> 
        <p>Login</p>
    </header>
    
    <div class="form_wrapper">
        <div class="triangle left"></div>
        <input type="text" placeholder="Username"/>
    
        <div class="triangle right"></div>
    </div>
    
    <div class="form_wrapper">
        <div class="triangle left"></div>
        <input type="Password" placeholder="Password"/>
        <div class="triangle right"></div>
    </div>
    
    <div class="form_wrapper">
        <div class="triangle left btn"></div>
        <button>Login</button>
        <div class="triangle right btnt"></div>
    </div>
    <a href="#">Forgot Password ?</a>
       </form>
    </div>
  )
}

export default LoginPage1
