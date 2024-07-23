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
  },
  joined_at: {
    required: true,
    type: Date,
  },
  name: {
    type: String,
  },
  bio: {
    type: String,
  },

  header_picture_url: {
    type: String,
    // default
  },
  profile_picture_url: {
    type: String,
    // default
  },
});

export default User = mongoose.model("user", userSchema);
