import { useForm } from "react-hook-form";
import logoWhight from "../assets/logoWhite.png";
import UserController from "../controllers/userController";



const ForgotPasswordDialog = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const { errorMessage,
        handleResetPassword,
        successfulMessage}=UserController()

  return (
    <dialog id="ForgotPasswordForm" className={`modal max-sm:bg-black bg-[#5b708366]  `}>
    <div className="modal-box bg-black ">
      <form method="dialog ">
        <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
      </form>
    <div className={`hero-content flex-col `}>
    <img src={logoWhight} alt="Logo" className=" w-8 h-8 flex-col"/>
      
        <form className={`card-body p-0 pt-6 ${successfulMessage? "hidden" : "visible"} `}>
        <h1 className="text-2xl font-extrabold mb-3">Find your X account
        </h1> 
        <p className="pb-4">Enter the email associated with your account to change your password.</p>
          <div className="form-control">
          <p className="mb-2 text-[#e25858]">{errors.email?.message}</p>
          {errorMessage && <h1 className="mb-2 text-[#da6c6c]">{errorMessage}</h1> }

            <input  placeholder="Email" className="input  bg-transparent text-xs input-bordered focus:outline-custom-blue focus:rounded-lg duration-[0.2s]" {...register("email",{required:"email is required"})} />

          </div>
          
          <div className="form-control mt-6">
            <input type="submit" onClick={handleSubmit(handleResetPassword)} className="btn btn-primary bg-slate-50 rounded-full	outline-none	min-h-0  h-10 hover:bg-slate-100 mt-6 " value={"Next"}/>
  
          </div>
  
        </form>
    </div>
   { successfulMessage&&<div className="h-48 p-8">
        <h1 >A password reset link has been sent to your email address successfully.</h1>
    </div>}
  </div>
  
  </dialog>
  )
}

export default ForgotPasswordDialog






   