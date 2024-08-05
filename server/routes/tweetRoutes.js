import express from "express";
const router = express.Router();
import { requireLogin } from "../middlewares/signin.js";
import {
  createTweet,
  getAllTweets,
  getFollowingTweets,
  getUserTweets,
  getTweetComments,
  getTweetQuotes,
  saveTweet,
  likeTweet,
  retweet,
  likedTweets,
  savedTweets,
} from "../repositories/tweetRepo.js";

router.post("/create-tweet", requireLogin, createTweet);

router.get("/", getAllTweets);

router.get("/following-tweets", requireLogin, getFollowingTweets);

// router.get("/:userId/tweets", requireLogin, getUserTweets);
router.get("/user-tweets", requireLogin, getUserTweets);


router.get("/:tweetId/comments", getTweetComments);

router.get("/:tweetId/quotes", getTweetQuotes);

router.post("/:tweetId/save", requireLogin, saveTweet);

router.post("/:tweetId/like", requireLogin, likeTweet);

router.post("/:tweetId/retweet", requireLogin, retweet);

router.get("/saved-tweets", requireLogin, savedTweets);

router.get("/liked-tweets", requireLogin, likedTweets);



export default router;
