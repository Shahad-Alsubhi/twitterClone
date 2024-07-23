import mongoose from "mongoose";

const retweetSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
  retweeted_at: {
    type: Date,
    required: true,
  },
});

export default Retweet = mongoose.model("retweet", retweetSchema);
