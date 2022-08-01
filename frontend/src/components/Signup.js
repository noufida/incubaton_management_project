import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap'
import AuthContext from '../contexts/AuthContext';

function Signup() {
    let {signupUser} = useContext(AuthContext)
  return (
    <div>
        <Row className='justify-content-center pt-5 mt-5'>
            <Col className='align-items-center' lg={4} >
                <h2 className='my-4'>SignUp</h2>
            <Form onSubmit={signupUser} >
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    </div>
  )
}

export default Signup