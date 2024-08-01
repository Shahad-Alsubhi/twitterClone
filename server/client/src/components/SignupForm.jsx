import logoWhight from "../assets/logoWhite.png";


export default function Signup(){
    return(
    <dialog id="Signup_form" className="modal max-sm:bg-black bg-[#5b708366] ">
  <div className="modal-box bg-black ">
    <form method="dialog ">
      <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
    </form>

  <div className="hero-content flex-col ">
  <img src={logoWhight} alt="Logo" className=" w-8 h-8 flex-col"/>
    
      <form className="card-body pt-6">
      <h1 className="text-2xl font-extrabold mb-5">Create your account
      </h1> 
        <div className="form-control">
    <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  placeholder="enter your Name" className="input input-bordered bg-transparent text-xs  focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  />
        </div>
        <div className="form-control">
    <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  placeholder="enter your email" className="input input-bordered bg-transparent text-xs  focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="input input-bordered bg-transparent text-xs focus:outline-custom-blue focus:rounded-lg duration-[0.2s]"  />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-slate-50 rounded-full	outline-none	min-h-0  h-10 hover:bg-slate-100 mt-6 ">Next</button>

        </div>

      </form>
  </div>
</div>

</dialog>);

}