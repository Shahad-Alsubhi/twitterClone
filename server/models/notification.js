import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
  user_id: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ["like", "retweet", "follow"],
  },
  source_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
});

export default Notification = mongoose.model(
  "notification",
  notificationSchema
);
