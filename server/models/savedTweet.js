import mongoose from "mongoose";

const savedTweetSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
  saved_at: {
    type: Date,
    required: true,
  },
});

const SavedTweet = mongoose.model("savedTweet", savedTweetSchema);
export default SavedTweet;
