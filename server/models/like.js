import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
  liked_at: {
    type: Date,
    required: true,
  },
});

export default Like = mongoose.model("retweet", likeSchema);
