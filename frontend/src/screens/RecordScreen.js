import React from 'react'
import { Row, Col} from 'react-bootstrap'
import RecordTable from '../components/RecordTable'
import AdminNav from '../components/AdminNav'
import SideNav from '../components/SideNav'

function RecordScreen() {
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
                <RecordTable/>
                </Col>
        </Row>

    </div>
  )
}

export default RecordScreen