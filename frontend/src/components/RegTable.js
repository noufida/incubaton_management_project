import React,{useEffect,useContext,useState} from 'react'
import Table from 'react-bootstrap/Table';
import AuthContext from '../contexts/AuthContext';
import NewRegContext from '../contexts/NewRegContext'
import { useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function RegTable() {
  let navigate=useNavigate()
  let {authTokens} = useContext(AuthContext)
  let {newRegs,company} = useContext(NewRegContext)
  let table1=0
  let table2=0
 
  useEffect(() => {
    newRegs()
    
    console.log("giggii")
    
  },[])
 
    let i=1
  
    let pend = async(pk)=>{
        
        console.log(pk)
      let response = await fetch(`http://127.0.0.1:8000/base/admins/new_regs/${pk}/`,{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'Authorization': 'Bearer ' + String(authTokens.access)
          },
          
          
          
      })
      let data = await response.json()
      console.log(data)
      if (response.status===200){
       
        newRegs()
          
      }else{
          alert("Something went wrong!!")
      }
  
      
  }

  let approve = async(pk)=>{
        
    console.log(pk)
  let response = await fetch(`http://127.0.0.1:8000/base/admins/new_regs/approve/${pk}/`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
      },
      
      
      
  })
  let data = await response.json()
  console.log(data)
  if (response.status===200){
    alert("Application Approved")
    newRegs()
      
  }else{
      alert("Something went wrong!!")
  }

  
}

  let decline = async(pk)=>{
        
    console.log(pk)
  let response = await fetch(`http://127.0.0.1:8000/base/admins/new_regs/delete/${pk}/`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
      },
      
      
      
  })
  let data = await response.json()
  console.log(data)
  if (response.status===200){
    alert("The Application has been declined.")
    
      
  }else{
      alert("Something went wrong!!")
  }

  
}


 
  
  

  return (
    
    <div>
      
      <h3 className='m-5'>New Applicant List</h3>
        <Table striped  lg={12} md={12} sm={12}>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Company Name</th>
          <th>company Details</th>
          <th>Status</th>
          <th>Details</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {company.map((obj,index)=>
           
           (obj.status)==='registered' && 
             
          <tr>            
                    
          <td>{table1=table1+1} </td> 
              
          <td>{obj.company_name}</td>  
          <td>{obj.team_description}</td>  
          <td>{obj.status}</td>
            <td> <Button variant="outline-info" onClick={()=> navigate(`/detail/${obj.id}`)} >Open</Button>{' '}</td>   
          
       
          <td><Button variant="outline-warning" onClick={()=>pend(obj.id)} >Pending</Button>{' '} </td>
       
        </tr> 
    
         
        )
        }
     
       
      </tbody>
      </Table>
<br/><br/><br/>

      <h3 className='m-5'>Pending Applicant List</h3>
        <Table striped  hover>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Company Name</th>
          <th>company Details</th>
          <th>Status</th>
          <th>Details</th>
          <th>Actions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {company.map((obj,index)=>
           obj.status!== 'registered' &&  
           
          <tr>            
                         
          <td>{table2=table2+1}</td> 
          <td>{obj.company_name}</td>   
          <td>{obj.team_description}</td>
          <td >{obj.status}</td>
             <td> <Button variant="outline-info" onClick={()=> navigate(`/detail/${obj.id}`)} >Open</Button>{' '}</td>   
             
                             
          <td><Button variant="outline-success" onClick={()=>approve(obj.id)}>Approve</Button>{' '}</td> 

             
          <td><Button variant="outline-danger"  onClick={()=>decline(obj.id)} >Decline</Button>{' '} </td> 
        </tr> 
    
         
        )
        }
     
       
      </tbody>
    </Table>
    </div>
  )
}

export default RegTable


