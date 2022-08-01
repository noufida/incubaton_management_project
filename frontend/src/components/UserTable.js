import React,{useContext,useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import AuthContext from '../contexts/AuthContext';
import Button from 'react-bootstrap/Button';

function UserTable() {
    const [list, setList] = useState([])
    useEffect(() => {
      userlist()
    }, [])
    
    let {authTokens}=useContext(AuthContext)
    let userlist = async()=>{
        
        
        let response = await fetch('http://127.0.0.1:8000/base/users/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            
            
            
        })
        let data = await response.json()
        console.log(data)
        if (response.status===200){
            setList(data)
           
           
        }else{
            alert("Something went wrong!!")
        }
        
        
    }

    let control = async(obj_id)=>{
        console.log(obj_id)
        let response = await fetch(`http://127.0.0.1:8000/base/users/control/${obj_id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            
            
            
        })
        let data = await response.json()
        console.log(data)
        if (response.status===200){
            console.log("havuuuu")
             userlist()
           
        }else{
            alert("Something went wrong tto!!")
        }
        
    }
    
  return (
    <div>
        <Table striped bordered hover size="sm" className='mt-5'>
      <thead>
        <tr >
          <th>Sl No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { list.map((obj,index)=>
              obj.is_staff===false &&
                <tr>
                <td>{index}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>  
                {
                  obj.is_active ?
                  <td> <Button variant="outline-danger"  onClick={()=> control(obj.id)} >Block</Button>{' '}</td> :
                  <td> <Button variant="outline-success"  onClick={()=> control(obj.id)} >Unblock</Button>{' '}</td> 
                }             
                 
          
              
                </tr>

        )
           
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default UserTable