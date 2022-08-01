import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap'
import AuthContext from '../contexts/AuthContext'

function Login() {
    let {loginUser} = useContext(AuthContext)
  return (
    
    <div>
        <Row className='justify-content-center pt-5 mt-5'>
            <Col className='' lg={3} >
                <h2 className='my-5'>Login</h2>
            <Form onSubmit={loginUser} >

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter email" />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
      
    </div>
  )
}

export default Login