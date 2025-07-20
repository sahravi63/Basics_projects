import React from 'react'
import { useState,useContext } from 'react';
import UserContext  from '../Usecontext/UserContext';

function Login() {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
const handelLogin=(e)=>{
    e.preventDefault();
     
    if(username && password){
        setUser({username,password})
        console.log("Login Successful",username)
    }
}
  return (
    <div>
      <h1>LOGIN</h1>
      <input type='text'
      value={username}
      onChange={(e)=>setUserName(e.target.value)} 
      placeholder='username'/>
      <input type='text'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       placeholder='password'/>
      <button onClick={handelLogin}>Login</button>
    </div>
  )
}

export default Login
