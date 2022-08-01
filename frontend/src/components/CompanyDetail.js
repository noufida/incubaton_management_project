import React,{useContext,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import DetailContext from '../contexts/DetailContext';

function CompanyDetail() {
    
   
    let {detail,viewme} = useContext(DetailContext)
    const params = useParams();
    let a=params.id
    useEffect(() => {
        viewme(a)
        
        console.log("giggii")
        
      },[])

   
  return (
    <div>
      <Table className='m-5 '  size="sm">

      <tbody style={{'lineHeight':'8vh'}}>
        <h2 ><u>Details</u></h2>
        <tr>         
          <th>Name</th>
          <td  >{detail.name}</td>
          </tr>

          <tr>
          <th>Address</th>
          <td>{detail.address}</td>
          </tr>

          <tr>
          <th>City</th>
          <td>{detail.city}</td>
          </tr>

          <tr>
          <th>State</th>
          <td>{detail.state}</td>  
          </tr>

          <tr>
          <th>Email Address</th>
          <td>{detail.email}</td>
          </tr>

          <tr>
          <th>Phone number</th>
          <td>{detail.phone_number}</td>
          </tr>

          <tr>
          <th>Company Name</th>
          <td>{detail.company_name}</td>
          </tr>

          <tr>
          <th>About Team</th>
          <td>{detail.team_description}</td>   
          </tr>

          <tr>
          <th>About Products</th>
          <td>{detail.product_description}</td> 
          </tr>

          <tr>
          <th>Problem</th>
          <td>{detail.problem_description}</td>
        </tr>
      </tbody>
     
    </Table>
    
    </div>
  )
}

export default CompanyDetail