import { Link } from "react-router-dom";
import logoWhight from "../assets/logoWhite.png";


export default function Login(){
    return(
        <dialog id="Login_form" className="modal max-sm:bg-black bg-[#5b708366]">
  <div className="modal-box  bg-black  ">
    <form method="dialog ">
      <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
    </form>

  <div className="hero-content flex-col ">
  <img src={logoWhight} alt="Logo" className=" w-8 h-8 flex-col"/>
    
      <form className="card-body p-0 pt-6">
        <div className="form-control">
<h1 className="text-2xl font-extrabold mb-5">Sign in to X
  </h1>        
    <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  placeholder="enter your email" className="input input-bordered bg-transparent text-xs focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="input input-bordered bg-transparent text-xs focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-slate-50 rounded-full	outline-none	min-h-0  h-10 hover:bg-slate-100 mb-3 ">Login</button>
          <button className="btn btn-primary bg-slate-50 rounded-full	outline-none bg-transparent text-slate-50 border-custom-gray min-h-0  h-10 hover:bg-gray-700/40 hover:border-custom-gray duration-[0.2s]">Forgot password?</button>

        </div>

        <h3 className="text-xs text-custom-gray pl-3">Don&apos;t have an account? <Link className="text-custom-blue cursor-pointer">Sign up</Link> </h3>
      </form>
  </div>
</div>

</dialog>
    )
}