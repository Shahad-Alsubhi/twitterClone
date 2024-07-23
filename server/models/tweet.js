import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
  created_at: {
    type: Date,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
  },
  parent_tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
});

export default Tweet = mongoose.model("tweet", tweetSchema);
