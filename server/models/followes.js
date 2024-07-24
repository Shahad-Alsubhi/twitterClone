import mongoose from "mongoose";

const followSchema = mongoose.Schema({
  follower_id: {
    type: String,
    required: true,
  },
  following_id: {
    type: String,
    required: true,
  },
});

const Follow = mongoose.model("follow", followSchema);
export default Follow;
