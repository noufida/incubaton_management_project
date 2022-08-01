import React,{useContext} from 'react'
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import AuthContext from '../contexts/AuthContext'

function SideNav() {
    let {logoutUser} = useContext(AuthContext)
  return (
    <div>
        

        <Nav style={{'height':'200vh','width':'25vh'}} className="col-md-1 d-none d-md-block bg-dark sidebar "
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                {/* <div className="sidebar-sticky"></div> */}
                <br></br>
            
            <Nav.Item className='m-4'>
            <Link style={{'textDecoration':'none','color':'#ffff','line_height':'10px'}} to="/users">Users</Link>
            </Nav.Item>  
            <hr style={{'color':'#ffff'}} />
            <Nav.Item className='m-4'>
                <Link style={{'textDecoration':'none','color':'#ffff','line_height':'10px'}} to="/admin_home">Applicant list</Link>
            </Nav.Item>
            <hr style={{'color':'#ffff'}} />
            <Nav.Item className='m-4'>
                <Link style={{'textDecoration':'none','color':'#ffff','line_height':'10px'}} to="/records">Record track</Link>
            </Nav.Item>
            <hr style={{'color':'#ffff'}} />
            <Nav.Item className='m-4'>
                <Link style={{'textDecoration':'none','color':'#ffff','line_height':'10px'}} to="/booking">Booking slots</Link>
            </Nav.Item>
            <hr style={{'color':'#ffff'}} />
            <Nav.Item className='m-4'>
            <p style={{'color':'#ffff','cursor':'pointer'}} onClick={logoutUser} >Logout</p>
            </Nav.Item>
            <hr style={{'color':'#ffff','cursor':'pointer'}} />
            {/* <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item> */}
            </Nav>
    </div>
  )
}

export default SideNav