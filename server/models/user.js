import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  joined_at: {
    required: true,
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },

  header_picture_url: {
    type: String,
  },
  profile_picture_url: {
    type: String,
    default:
      "https://res.cloudinary.com/deqnekemi/image/upload/v1721735371/User-Profile-PNG-Clipart_gb6vgf.png",
  },
});

const User = mongoose.model("user", userSchema);
export default User;
