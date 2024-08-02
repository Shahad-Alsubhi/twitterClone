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
   
  },
});

const User = mongoose.model("user", userSchema);
export default User;
