

const Avatar = ({img, style}) => {
 
  return (
    <div className="avatar cursor-pointer">
  <div className={`w-9 h-9 rounded-full block ${style}`}>
    <img src={img|| "https://res.cloudinary.com/deqnekemi/image/upload/v1721735371/User-Profile-PNG-Clipart_gb6vgf.png"} />
    </div>

</div>
  )
}

export default Avatar
