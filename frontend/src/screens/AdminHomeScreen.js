import React from 'react'
import AdminNav from '../components/AdminNav'
import RegTable from '../components/RegTable'
import SideNav from '../components/SideNav'
import { Row, Col} from 'react-bootstrap'


function AdminHomeScreen() {
  
 
 
  return (
    
    <div>
        <Row>
        <AdminNav/>
        </Row>
        <Row>
            <Col lg={2} >
        <SideNav/>            
            </Col>
            <Col lg={9}>
                <RegTable/>
                </Col>
        </Row>
    </div>
  )
}

export default AdminHomeScreen
