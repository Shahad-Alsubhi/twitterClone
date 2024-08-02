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

router.get("/:userId/Tweets", requireLogin, getUserTweets);

router.get("/:tweetId/Comments", getTweetComments);

router.get("/:tweetId/Quotes", getTweetQuotes);

router.post("/:tweetId/save", requireLogin, saveTweet);

router.post("/:tweetId/like", requireLogin, likeTweet);

router.post("/:tweetId/retweet", requireLogin, retweet);

router.get("/savedTweets", requireLogin, savedTweets);

router.get("/likedTweets", requireLogin, likedTweets);

router.get("/test", (req, res) => {
  const adder = makeAdder();

  console.log(adder(10));

  res.status(20).send();
});

function makeAdder() {
  const adder = 10;

  return function (value) {
    return adder + value;
  };
}

export default router;
