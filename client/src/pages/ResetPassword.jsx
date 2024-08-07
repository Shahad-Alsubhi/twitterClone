import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import UserController from "../controllers/userController"
import logoWhight from "../assets/logoWhite.png";




const ResetPassword = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {handleSetNewPassword,errorMessage}=UserController()
    const {token} =useParams()


  return (
    <div className="flex justify-center">
    <div className=" w-fit flex  flex-col h-screen items-center justify-start mt-40 ">
      <img src={logoWhight} alt="Logo" className=" w-6 h-6 flex-col mb-11"/>
    
    <div className="form-control   w-full">
    <h1 className="mb-5">Create New Password</h1>

    {errorMessage&& <h4 className="mb-3 text-[#e26060]">{errorMessage}</h4>}
    <input type="password" placeholder="enter your password" className="input input-bordered bg-transparent text-xs focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  {...register("password",{required:"password is required"})} />
    <p className="mt-1 text-[#e25858]">{errors.password?.message}</p>

  </div>
  <div className="form-control mt-6">
    <button type="submit"  onClick={handleSubmit((data)=>handleSetNewPassword(data,token))} className="btn btn-primary bg-slate-50 rounded-full	outline-none min-h-0  h-10 hover:bg-slate-100 mb-3  " >Reset</button>

  </div>
  </div>
  </div>
  )
}

export default ResetPassword
