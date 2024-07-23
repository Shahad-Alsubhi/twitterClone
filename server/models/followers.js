import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  follower_id: {
    type: String,
    required: true,
  },
  followeing_id: {
    type: String,
    required: true,
  },
  
});

export default Like = mongoose.model("retweet", likeSchema);
