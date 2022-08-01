import { createContext,useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate} from 'react-router-dom'


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=>{
    // localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    const navigate = useNavigate()
   
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)



    let signupUser = async(e)=>{
        e.preventDefault()
        console.log("ierafhreyuf")
        let response = await fetch('http://127.0.0.1:8000/base/users/register/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({'name':e.target.name.value,'password':e.target.password.value,'email':e.target.email.value})
            
        })
        let data = await response.json()
        console.log(data)
        if (response.status===200){
            navigate('/login')
            alert("Successfully registered!!")
        }else{
            alert("Something went wrong!!")
        }
    

    }




    
    
    let loginUser = async(e)=>{        
        e.preventDefault()        
        console.log("ierafhreyuf")
        let response = await fetch('http://127.0.0.1:8000/base/users/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
            
        })
        let data = await response.json()
        console.log(data)
        if (response.status===200){
           
            setAuthTokens(data) 
            console.log(authTokens)          
            setUser(jwt_decode(data.access))   
            console.log(user)        
            localStorage.setItem('authTokens', JSON.stringify(data))
         
            console.log(data.is_staff)
            if (data.is_staff === true){
                navigate('/admin_home')
            }
            else{
                navigate('/')
            }
            
        }else{
            alert("Something went wrong!!")
        }
    

    }

    let logoutUser = ()=>{
        setAuthTokens(null)           
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }
    let contextData={
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        signupUser:signupUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}