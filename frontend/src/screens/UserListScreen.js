import React from 'react'
import AdminNav from '../components/AdminNav'
import SideNav from '../components/SideNav'
import UserTable from '../components/UserTable'
import { Row, Col} from 'react-bootstrap'

function UserListScreen() {
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
                <UserTable/>
                </Col>
        </Row>
    </div>
  )
}

export default UserListScreen