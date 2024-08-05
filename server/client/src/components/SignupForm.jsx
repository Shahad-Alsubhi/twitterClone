import { useForm } from "react-hook-form";
import logoWhight from "../assets/logoWhite.png";
import UserController from "../controllers/userController";


export default function Signup(){
  const {register,handleSubmit,formState:{errors}}=useForm()
  const {handleSignup,errorMessage}=UserController()

    return(
    <dialog id="Signup_form" className="modal max-sm:bg-black bg-[#5b708366] scrollbar-">
  <div className="modal-box bg-black ">
    <form method="dialog ">
      <button onClick={(e)=>{e.preventDefault();document.getElementById("Signup_form").close()}} className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
    </form>

  <div className="hero-content flex-col ">
  <img src={logoWhight} alt="Logo" className=" w-8 h-8 flex-col"/>
    
      <form className="card-body pt-4 ">
      <h1 className="text-2xl font-extrabold mb-5">Create your account
      </h1> 
      {errorMessage && <h4 className="m-1 text-[#e25858]">{errorMessage}</h4>}      

        <div className="form-control">
    <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  placeholder="enter your Name" className="input input-bordered bg-transparent text-xs  focus:outline-custom-blue focus:rounded-lg duration-[0.2s]" {...register("name",{required:"name is required"})} />
          <p className="mt-1 text-[#e25858]">{errors.name?.message}</p>

        </div>
        <div className="form-control">
    <label className="label">
            <span className="label-text">Username</span>
          
          </label>
          <input  placeholder="username"  className="input input-bordered bg-transparent text-xs  focus:outline-custom-blue focus:rounded-lg duration-[0.2s]" {...register("username",{required:"username is required"})} />
          <p className="mt-1 text-[#e25858]">{errors.username?.message}</p>

        </div>

        <div className="form-control">
    <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  placeholder="enter your email" className="input input-bordered bg-transparent text-xs  focus:outline-custom-blue focus:rounded-lg duration-[0.2s]" {...register("email",{required:"email is required"})}  />
          <p className="mt-1 text-[#e25858]">{errors.email?.message}</p>

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="input input-bordered bg-transparent text-xs focus:outline-custom-blue focus:rounded-lg duration-[0.2s]" {...register("password",{required:"password is required"})} />
          <p className="mt-1 text-[#e25858]">{errors.password?.message}</p>

        </div>
        <div className="form-control mt-4">
          <button onClick={handleSubmit(handleSignup) }className="btn btn-primary bg-slate-50 rounded-full	outline-none	min-h-0  h-10 hover:bg-slate-100 mt-6 ">Signup</button>

        </div>

      </form>
  </div>
</div>

</dialog>);

}