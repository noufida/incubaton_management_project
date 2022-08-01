import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap'
import AuthContext from "../contexts/AuthContext";



function Register() {   
 

  let {authTokens}=useContext(AuthContext)

  let regCompany = async(e)=>{
    e.preventDefault()
  
    let response = await fetch('http://127.0.0.1:8000/base/users/register_company/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        },
        
        body:JSON.stringify({
                'name':e.target.name.value,
                'address':e.target.address.value,
                'email':e.target.email.value,
                'city':e.target.city.value,
                'state':e.target.state.value,
                'phone_number':e.target.phone_number.value,
                'company_name':e.target.company_name.value,
                'team_description':e.target.team_description.value,
                'product_description':e.target.product_description.value,
                'problem_description':e.target.problem_description.value,
            
            })
                
    })
    let data = await response.json()
    console.log(data)
    if (response.status===200){
        
        alert("Successfully registered!!")
        window.location.reload()
        
    }else{
        alert("Something went wrong!!")
    }


}

  return (
    <div>
      <Row  className='justify-content-center pt-5 mt-5'>
        <Col lg={6}>
        <h2 className='mb-5' >Register Your Company</h2>
        <Form onSubmit={regCompany} >
        <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" />       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" />       
      </Form.Group>

      <Form.Group  style={{'float':'left'}} className="col-lg-5 mx-1" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' />       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 mx-1">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" name="state"/>       
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 m-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-5 m-1">
        <Form.Label>Phone no.</Form.Label>
        <Form.Control type="tel" name="phone_number" />
      </Form.Group>

      <Form.Group style={{'float':'left'}} className="col-lg-10 m-2">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" name="company_name"/>       
      </Form.Group>

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your Team</Form.Label>
        <Form.Control as="textarea" rows={3} name="team_description"/>
      </Form.Group>      

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your Products</Form.Label>
        <Form.Control as="textarea" rows={3} name="product_description"/>
      </Form.Group>

      <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe Your problem</Form.Label>
        <Form.Control as="textarea" rows={3} name="problem_description" />
      </Form.Group>

      {/* <Form.Group  style={{'float':'left'}} className="col-lg-10 m-2">
      <Form.Select  aria-label="Default select example">
      <option>Type</option>
      <option value="1">Physical Incubation</option>
      <option value="2">Virtual Incubation</option>    
    </Form.Select>
    </Form.Group>
     */}
      
      <Button  style={{'float':'left'}} className="m-5" variant="primary" type="submit">
        Submit
      </Button>
  
    </Form>
        </Col>
      </Row>
       
    </div>
  )
}

export default Register