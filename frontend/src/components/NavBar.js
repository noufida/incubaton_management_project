import React,{useContext,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link,} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import AuthContext from '../contexts/AuthContext';





function NavBar() {
    let {user, logoutUser, authTokens}=useContext(AuthContext)
    const [regs, setRegs] = useState([])
    
    let myreg = async()=>{
     
      let response = await fetch('http://127.0.0.1:8000/base/users/myregs/',{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization': 'Bearer ' + String(authTokens.access)
          },
          
          
          
      })
      let data = await response.json()
      console.log(data)
      if (response.status===200){        
             setRegs(data)
       
          
      }else{
        console.log("noooonoufida")
          alert("Something went wrong!!")
      }
    
      
    }
 
  
  
  return (
    <div>     
    <Navbar bg="light" expand="lg">
        <Container>
         
            <Navbar.Brand href="#home"><b>INCUB</b></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar className='position-absolute top-5 end-0' id="basic-navbar-nav">
         
                {user ? <p className='mx-5' >Hello, {authTokens.name} </p> :
                <Nav className="me-3">
                <Link style={{'textDecoration':'none','color':'black'}} to="/signup">Signup </Link>                             
                </Nav> }
              
     
            {[ 'bottom'].map((placement) => (
              user &&
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
             
              <Popover.Header as="h3">Booking Infos </Popover.Header>
              <Popover.Body>
                { regs.map((obj)=>
                obj.slot &&
                  <p>Your booking slot on registration <strong style={{'color':'green'}}>{obj.company_name} </strong>
                   : {obj.slot}</p> 
                )
                    
                }
              
              </Popover.Body>
            </Popover>
          }
        >
          <p onClick={()=>myreg()} style={{'cursor':'pointer'}}>Messages</p>
        </OverlayTrigger>
      )
      
      )}  
     


                <Nav className=" me-3">
                  { user ? (<p className='mx-5' style={{'cursor':'pointer'}} onClick={logoutUser} >Logout</p>) :
                  (<Link style={{'textDecoration':'none','color':'black'}} className='mx-5'  to="/login">Login</Link>)  }
                                              
                </Nav>
            </Navbar>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavBar