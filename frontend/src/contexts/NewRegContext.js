import { createContext,useState, useContext } from "react";
import AuthContext from "./AuthContext";

const NewRegContext = createContext()

export default NewRegContext;

export const NewRegProvider = ({children})=>{
    let [company, setCompany] = useState([])
    
    let {authTokens}=useContext(AuthContext)

    let newRegs = async()=>{
        
        
        let response = await fetch('http://127.0.0.1:8000/base/admins/new_regs/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            
            
            
        })
        let data = await response.json()
        // console.log(data)
        if (response.status===200){
            console.log("i got it")
            console.log(data)
            setCompany(data)
           
           
        }else{
            alert("Something went wrong!!")
        }
        
        
    }
    

    let contextData={
        company:company,       
        newRegs:newRegs,
       
    }
    return(
        <NewRegContext.Provider value={contextData}>
            {children}
        </NewRegContext.Provider>
    )
}
