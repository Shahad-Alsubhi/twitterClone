import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
  created_at: {
    type: Date,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  content_text: {
    type: String,
  },
  content_images_urls: {
    type: [String],
  },
  type: {
    type: String,
    enum: ["comment", "quote", "tweet"],
    required: true,
  },
  parent_tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
});

const Tweet = mongoose.model("tweet", tweetSchema);
export default Tweet;
