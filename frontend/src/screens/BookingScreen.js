import React from 'react'
import { Row, Col} from 'react-bootstrap'
import AdminNav from '../components/AdminNav'
import SideNav from '../components/SideNav'
import Slots from '../components/Slots'

function BookingScreen() {
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
               <Slots/>
                </Col>
        </Row>

    </div>
  )
}

export default BookingScreen