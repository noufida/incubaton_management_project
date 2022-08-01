import React from 'react'
import AdminNav from '../components/AdminNav'
import RegTable from '../components/RegTable'
import SideNav from '../components/SideNav'
import { Row, Col} from 'react-bootstrap'
import CompanyDetail from '../components/CompanyDetail'

function Detail() {
   
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
                <CompanyDetail />
                </Col>
        </Row> 
    </div>
  )
}

export default Detail