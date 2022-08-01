import React,{useContext} from 'react'
import Login from '../components/Login'
import NavBar from '../components/NavBar'



function LoginScreen() {
  
  return (
    <div>
       <NavBar/>
        <Login/>
    </div>
  )
}

export default LoginScreen