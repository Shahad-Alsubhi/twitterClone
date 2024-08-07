import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"


const UserController=()=>{

const [errorMessage,setErrorMessage]=useState("")
const [successfulMessage,setSuccessfulMessage]=useState("")

const { userToken,setUserToken } = useContext(UserContext)
const navigate=useNavigate()


const handleLogin=async (data)=>{
  await  fetch("https://twitterclone-wln9.onrender.com/users/user/login",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(async (res)=>{
        const response=await res.json();
        if(!res.ok){
            setErrorMessage(response.message);
        }else{
            localStorage.setItem("user",response.token)
            setUserToken(response.token);
            navigate("/home/tweets");
        }
    })
}

const handleSignup=async (data)=>{
    await  fetch("https://twitterclone-wln9.onrender.com/users/user/signup",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      }).then(async (res)=>{
          const response=await res.json();
          if(!res.ok){
              setErrorMessage(response.message);
          }else{
              localStorage.setItem("user",response.token)
              setUserToken(response.token);
              navigate("/home/tweets");
          }
      })
}

const handleResetPassword=async(data)=>{
    await fetch("https://twitterclone-wln9.onrender.com/users/user/forgot-password",{
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

    await fetch(`https://twitterclone-wln9.onrender.com/users/user/reset-password/${token}`,{
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

const getProfileData=async (userId)=>{
    const res =await fetch(`https://twitterclone-wln9.onrender.com/users/user/${userId}/profile`,{
        headers:{"Content-Type":"application/json",
        // Authorization: `Bearer ${userToken}`,
        },
    })
    const response=await res.json()
    if(res.ok){
        
        return response.profileData

    }

}

const getSearchResults=async (searchTerm)=>{
    const res =await fetch(`https://twitterclone-wln9.onrender.com/users/user/search/${searchTerm}`)
    const response=await res.json()
    if(res.ok){
        return response.results

    }

}

const handleUpdateProfile=async(formData)=>{
    const res=await fetch('https://twitterclone-wln9.onrender.com/users/user/update-profile',{
        headers:{
            Authorization: `Bearer ${userToken}`,
        },
        method:"PATCH",
        body:formData
    })
    const response=await res.json()
    if(res.ok){
        localStorage.setItem("user",response.token)
        setUserToken(response.token)
    }

}


return{
    handleLogin,
    errorMessage,
    handleResetPassword,
    successfulMessage,
    handleSignup,
    handleSetNewPassword,
    getProfileData,
    getSearchResults,
    handleUpdateProfile
}
}
export default UserController;