
import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';

function AdminNav() {
    let {user, logoutUser, authTokens}=useContext(AuthContext)
  return (
    <div>
          <Navbar bg="dark"  expand="lg">
        <Container style={{'color':'white'}} >
            <Navbar.Brand style={{'color':'white'}} href="#home"><span><b>INCUB</b></span> Admins</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='position-absolute top-5 end-0' id="basic-navbar-nav">
                {user && <p className='mx-5' >Hello, {authTokens.name} </p>}

                <Nav  className=" me-3">
                  { user ? (<p style={{'cursor':'pointer'}} onClick={logoutUser} >Logout</p>) :
                  (<Link  to="/login">Login</Link>)  }
                                              
                </Nav>
              
                
            </Navbar.Collapse>
        </Container>
    </Navbar>


    
    </div>
  )
}

export default AdminNav