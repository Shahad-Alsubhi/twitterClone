import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,// 
  },
  read: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ["like", "retweet", "follow","comment","quote"],
    required: true,

  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,

  },
  
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tweet",
  },
});

const Notification = mongoose.model("notification", notificationSchema);

export default Notification;
