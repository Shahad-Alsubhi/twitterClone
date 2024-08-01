import { Link } from "react-router-dom";
import logoWhight from "../assets/logoWhite.png";
import Signup from "../components/SignupForm";
import Login from "../components/LoginForm";

export default function WellcomePage() {
  return (
  <>
      <div className="flex flex-col  sm:items-start w-4/5 m-auto md:max-lg:pl-14 justify-start lg:flex-row lg:h-screen lg:items-center">
        <div className="lg:w-1/2 flex lg:justify-center ">
          <img src={logoWhight} alt="Logo" className="w-8 h-7 mt-9 mb-14 lg:w-72 lg:h-[19rem] "/>
        </div>
        <div className="lg:-mt-5 lg:w-1/2 ">
          <h1 className="text-5xl font-extrabold mb-11  w-40 leading-[4rem] lg:w-full	 lg:text-6xl lg:mb-20">Happening now</h1>
          <h3 className="text-2xl font-extrabold 	">Join today.</h3>
          <button className="bg-slate-50 text-black mt-11 mb-4 " onClick={()=>document.getElementById('Signup_form').showModal()}>Create account</button>
          <button className="bg-custom-blue" onClick={()=>document.getElementById('Login_form').showModal()}>Sign in</button>
          <h5 className="max-w-[17rem]  pl-2 mt-4 text-xs text-custom-gray">
            By signing up, you agree to the <span className="text-custom-blue cursor-pointer	">Terms of Service</span> and <span className="text-custom-blue cursor-pointer	">Privacy Policy</span>, including <span className="text-custom-blue cursor-pointer	">Cookie Use.</span>
          </h5>
        </div>
      </div>
      <div className=" text-sm  absolute bottom-3 text-custom-gray lg:m-auto max-sm:pr-2 max-sm:pl-2 max-sm:justify-center pr-5 pl-5 gap-x-6 flex flex-wrap justify-center">
        <Link>About</Link>
        <Link>Download the X app</Link>
        <Link>Help Center</Link>
        <Link>Terms of Service</Link>
        <Link>Privacy Policy</Link>
        <Link>Cookie Policy</Link>
        <Link>Accessibility</Link>
        <Link>Ads info</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Brand Resources</Link>
        <Link>Advertising</Link>
        <Link>Marketing</Link>
        <Link>X for Business</Link>
        <Link>Developers</Link>
        <Link>Directory</Link>
        <Link>Settings</Link>
        <Link>© 2024 X Corp.</Link>
      </div>

<Login/>
<Signup/>

      </>
  );
}


