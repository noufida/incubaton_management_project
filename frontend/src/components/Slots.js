import React,{useContext,useEffect,useState} from 'react'
import AuthContext from '../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import NewRegContext from '../contexts/NewRegContext';
import { Row, Col} from 'react-bootstrap'

function Slots() {
 
  const [approved, setApproved] = useState([])
  const [slot, setSlot] = useState(null)
  const [show, setShow] = useState(false); 
  const handleClose = () =>{
    window.location.reload()
    setShow(false);}
   const [store, setStore] = useState(null)
  
  const handleShow = (id) => {
    setShow(true);
    setSlot(id)    
   }
   const store_id = (id) => {
    setStore(id)   
   }
  let [slots, setSlots] = useState([])
  let {company,newRegs} = useContext(NewRegContext)
    useEffect(() => {
      book()
      newRegs()
      approve()
      
     
    }, [])


  
    let {authTokens} = useContext(AuthContext)
    let book = async(a)=>{
     
      let response = await fetch('http://127.0.0.1:8000/base/admins/book/',{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization': 'Bearer ' + String(authTokens.access)
          },
          
          
          
      })
      let data = await response.json()
      console.log(data)
      if (response.status===200){
        console.log("yesnoufida")
        setSlots(data)
        console.log({company})
       
        
       
          
      }else{
        console.log("noooonoufida")
          alert("Something went wrong!!")
      }
    
      
    }

    let allote = async()=>{
      console.log("neechw")
      
    let response = await fetch(`http://127.0.0.1:8000/base/admins/book/${slot}/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify({'reg_id':store})
        
        
    })
    let data = await response.json()
    console.log(data)
    if (response.status===200){
      console.log("booked")
      book()
      handleClose()
      
     
        
    }else{
      console.log("noooonoufida")
        alert("Something went wrong!!")
    }

    
  
    
  }

  let approve = async()=>{
     
    let response = await fetch('http://127.0.0.1:8000/base/admins/approved/',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
        },
        
        
        
    })
    let data = await response.json()
    console.log(data)
    if (response.status===200){
    
      setApproved(data)   
        console.log("saved")
    
        
    }else{
      console.log("noooonoufida")
        alert("Something went wrong!!")
    }
  
    
  }
  return (

    <div>
       

     <Row >
      <Col className='m-5 '>
      <h5 >SECTION A</h5>
      {
        slots.map((obj,index)=>
      obj.section==='a' &&
      <Button style={{  backgroundColor: obj.booked ? 'green' : 'white','border':'solid green 2px','width':'60px','height':'60px'}}
       className='m-5 obj.booked' variant="primary"   onClick= {()=>{ !obj.booked && handleShow(obj.id)}} >
                     
      </Button>
       
        
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Make an Appoinment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select a Company
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {approved.map((obj,index)=>
           obj.slot === null &&
            <Dropdown.Item onClick={()=>store_id(obj.id)} >{obj.company_name}</Dropdown.Item>
            
          
           )
          }
          </Dropdown.Menu>
        </Dropdown>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>allote()} variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>
      
      
       </Col>
   
     </Row><hr/><br/><br/>
    
     <Row>  
    
          <Col lg={3}>

            <Row>
            <h5>SECTION B</h5>
              { slots.map((obj,index)=>
              obj.section==='b' &&
               <Col lg={6}>
                   <Button style={{  backgroundColor: obj.booked ? 'green' : 'white','border':'solid green 2px','width':'60px','height':'60px'}}
                    className='m-5 obj.booked' variant="primary"   onClick= {()=>{ !obj.booked && handleShow(obj.id)}}>
                     
                     </Button>
               </Col>
              )              
             
              }             
             
            </Row>          
            

          </Col>

        
          <div className="vr"></div>

          <Col lg={3}>

            <Row>
            <h5>SECTION C</h5>
              { slots.map((obj,index)=>
              obj.section==='c' &&
               <Col lg={6}>
                    <Button style={{  backgroundColor: obj.booked ? 'green' : 'white','border':'solid green 2px','width':'60px','height':'60px'}} 
                    className='m-5 obj.booked' variant="primary"   onClick= {()=>{ !obj.booked && handleShow(obj.id)}}>
                     
                    </Button>
               </Col>
              )              
             
              }             
             
            </Row>         
           

          </Col>

          <div class="vr"></div>
          <Col lg={3}>

            <Row>
            <h5>SECTION D</h5>

              { slots.map((obj,index)=>
              obj.section==='d' &&
               <Col lg={6}>
                    <Button style={{  backgroundColor: obj.booked ? 'green' : 'white','border':'solid green 2px','width':'60px','height':'60px'}} 
                    className='m-5 obj.booked' variant="primary"   onClick= {()=>{ !obj.booked && handleShow(obj.id)}}>
                     
                     </Button>
               </Col>
              )              
             
              }             
             
            </Row>

            
            

          </Col>
       
    </Row>


    </div>
  )
}

export default Slots