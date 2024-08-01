import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"


const UserController=()=>{

const [errorMessage,setErrorMessage]=useState("")
const { setUser } = useContext(UserContext)
const navigate=useNavigate()


const handleLogin=(data)=>{
    fetch("/users/login",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(async (res)=>{
        const response=await res.json();
        if(!response.ok){
            setErrorMessage(response.message);
        }else{
            localStorage.setItem("user",response.token)
            setUser(response.token);
            navigate("/home/tweets");
        }
    })




}






return{
    handleLogin,
    errorMessage
}
}
export default UserController;