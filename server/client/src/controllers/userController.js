import { useContext, useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"


const UserController=()=>{

const [errorMessage,setErrorMessage]=useState("")
const [successfulMessage,setSuccessfulMessage]=useState("")

const { user,setUser } = useContext(UserContext)
const navigate=useNavigate()


const handleLogin=async (data)=>{
  await  fetch("http://localhost:5550/users/user/login",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(async (res)=>{
        const response=await res.json();
        if(!res.ok){
            setErrorMessage(response.message);
        }else{
            localStorage.setItem("user",response.token)
            setUser(response.token);
            navigate("/home/tweets");
        }
    })
}

const handleSignup=async (data)=>{
    await  fetch("http://localhost:5550/users/user/signup",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      }).then(async (res)=>{
          const response=await res.json();
          if(!res.ok){
              setErrorMessage(response.message);
          }else{
              localStorage.setItem("user",response.token)
              setUser(response.token);
              navigate("/home/tweets");
          }
      })
  }

const handleResetPassword=async(data)=>{
    await fetch("http://localhost:5550/users/user/forgot-password",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(async(res)=>{
        const response=await res.json()
        if(!res.ok){
            setErrorMessage(response.message);
        }else{
            setSuccessfulMessage(true)

        }

    })
}

const handleSetNewPassword=async(data,token)=>{

    await fetch(`http://localhost:5550/users/user/reset-password/${token}`,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(async(res)=>{
        const response=await res.json()
        if(!res.ok){
            setErrorMessage(response.message);
        }else{
            navigate("/");

        }

    })


}

const getProfileData=async ()=>{
    const res =await fetch("http://localhost:5550/users/user",{
        headers:{"Content-Type":"application/json",
        Authorization: `Bearer ${user}`,
        },
        

    })

}

return{
    handleLogin,
    errorMessage,
    handleResetPassword,
    successfulMessage,
    handleSignup,
    handleSetNewPassword
}
}
export default UserController;