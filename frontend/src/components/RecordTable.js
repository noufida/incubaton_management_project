import React,{useContext,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import NewRegContext from '../contexts/NewRegContext'
import ProgressBar from 'react-bootstrap/ProgressBar';

function RecordTable() {
    let a
    let {newRegs,company} = useContext(NewRegContext)
    useEffect(() => {
        newRegs()
        
      },[])
  return (
    <div>
        <Table className='m-5'   hover variant="light">
      <thead>
        <tr>
          <th>Sl. No.</th>
          <th>Company Name</th>
          <th>Company Details</th>
          <th>Progress</th>
          
         
        </tr>
      </thead>
      <tbody>
       
            {
                company.map((obj,index)=>
                <tr>
                <td>{index+1}</td>
                <td>{obj.company_name}</td>                
                <td>{obj.team_description}</td>
                <td style={{'width':'25vh','height':'9vh'}}>
                <ProgressBar style={{'height':'1vh'}}> 
                    { (obj.status)==="registered" ? a=1 : ((obj.status)==="pending" ? a=2 : a=3)  } 
                                 
                { a>=1 &&   
                <ProgressBar striped variant="danger" now={33.33}  /> } 
                { a>=2 &&   
                <ProgressBar  striped variant="warning" now={33.33}/>}
                 { a===3 &&   
                <ProgressBar striped variant="success" now={33.33} />}
                </ProgressBar>
                </td>
               
                </tr>
                )
            }
          
          
 
       
      </tbody>
    </Table>
    
    </div>
  )
}

export default RecordTable