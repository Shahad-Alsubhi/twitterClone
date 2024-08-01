import { Link } from "react-router-dom"


const Avatar = ({AvatarImg, style}) => {

  return (
    <div className="avatar cursor-pointer">
  <div className={`w-9 h-9 rounded-full block ${style}`}>
  <Link to={"/home/profile"}>
    <img src={AvatarImg||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
    </Link>
    </div>

</div>
  )
}

export default Avatar
