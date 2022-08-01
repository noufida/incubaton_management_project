import { createContext,useState, useContext } from "react";
import AuthContext from "./AuthContext";


const DetailContext = createContext()

export default DetailContext;

export const DetailProvider = ({children})=>{
    
    
    let {authTokens}=useContext(AuthContext)
    const [detail, setDetail] = useState([])

    let viewme = async(a)=>{
        console.log("neechw")
        console.log(a)
      let response = await fetch(`http://127.0.0.1:8000/base/admins/view/${a}/`,{
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
        setDetail(data)
          
      }else{
        console.log("noooonoufida")
          alert("Something went wrong!!")
      }
    
      
    }

    

    let contextData={
      detail:detail,
      viewme:viewme
       
    }
    return(
        <DetailContext.Provider value={contextData}>
            {children}
        </DetailContext.Provider>
    )
}
