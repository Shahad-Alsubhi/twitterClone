import Follow from "../models/followes.js";
import Like from "../models/like.js";
import Notification from "../models/notification.js";
import SavedTweet from "../models/savedTweet.js";
import Tweet from "../models/tweet.js";
import Retweet from "../models/retweet.js";

const createTweet = async (req, res) => {
  try {
    const { type, parent_tweet, content_text, content_images_urls } = req.body;
    if (!content_text && !content_images_urls) {
      return res.status(400).json({ message: "tweet can not be empty" });
    } else {
      if (type === "tweet") {
        const tweet = await Tweet.create({
          created_at: Date.now(),
          created_by: req.user,
          content_text: content_text ? content_text : "",
          content_images_urls: content_images_urls ? content_images_urls : null,
          type,
        });
        return res
          .status(200)
          .json({ message: "The tweet was created successfully", tweet });
      } else if (parent_tweet) {
        const tweet = await Tweet.create({
          created_at: Date.now(),
          created_by: req.user,
          content_text: content_text ? content_text : "",
          content_images_urls: content_images_urls ? content_images_urls : [],
          type,
          parent_tweet,
        });

        await Notification.create({
          user_id: tweet.created_by,
          created_at: Date.now(),
          type: `${type}`,
          tweet: tweet,
          by: req.user,
        });

        return res
          .status(200)
          .json({ message: "The tweet was created successfully", tweet });
      }
      return res
        .status(400)
        .json({ message: "parent-tweet should be included" });
    }
  } catch (e) {
    console.error("create a tweet error:", e);
    return res
      .status(500)
      .json({ message: "create a tweet failed. Please try again later." });
  }
};

const getAllTweets = async (req, res) => {
  try {
      const tweets = await Tweet.find().sort({
        created_at: -1,
      }).populate({path:'created_by',select:"username joined_at name bio header_picture_url profile_picture_url"});
      return res
        .status(200)
        .json({ message: "fetched all tweets successfully", tweets });
  } catch (e) {
    console.error("fetch all tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getFollowingTweets = async (req, res) => {
  try {
    const userFollowing = await Follow.find({
      follower_id: req.user._id,
    }).select("following_id");
    const arr = userFollowing.map((user) => {
      return user.following_id;
    });
    const tweets = await Tweet.find({
      created_by: { $in: arr },
    }).sort({ created_at: -1 });

    return res
      .status(200)
      .json({ message: "fetched all tweets successfully", tweets });
  } catch (e) {
    console.error("fetch all tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getUserTweets = async (req, res) => {
  try {
    const {userId}=req.params
    const tweets = await Tweet.find({ created_by: userId }).sort({
      created_at: -1,
    }).populate("created_by").populate({
      path: 'parent_tweet', 
      populate:{path:'created_by',select:"username joined_at name bio header_picture_url profile_picture_url"}
    });
    return res
      .status(200)
      .json({ message: "fetched tweets successfully", tweets });
  } catch (e) {
    console.error("fetch tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getTweetComments = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const tweets = await Tweet.find({
      parent_tweet: tweetId,
      type: "comment",
    }).sort({
      created_at: -1,
    }).populate({path:'created_by',select:"username joined_at name bio header_picture_url profile_picture_url"});
    return res
      .status(200)
      .json({ message: "fetched tweets successfully", tweets });
  } catch (e) {
    console.error("fetch tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getTweetQuotes = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const tweets = await Tweet.find({
      parent_tweet: tweetId,
      type: "quote",
    }).sort({
      created_at: -1,
    }).populate({path:'created_by',select:"username joined_at name bio header_picture_url profile_picture_url"});
    return res
      .status(200)
      .json({ message: "fetched tweets successfully", tweets });
  } catch (e) {
    console.error("fetch tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const saveTweet = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const savedTweet = await SavedTweet.findOne({
      user_id: req.user._id,
      tweet: tweetId,
    });
    if (savedTweet) {
      await SavedTweet.findByIdAndDelete(savedTweet._id);
      return res
        .status(200)
        .json({ message: "removed a tweet from saved tweets successfully" });
    } else {
      const tweet = await Tweet.findById(tweetId);
      await SavedTweet.create({
        user_id: req.user._id,
        tweet: tweet,
        saved_at: Date.now(),
      });
    }
    return res.status(200).json({ message: "saved tweet successfully" });
  } catch (e) {
    console.error("save tweet error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const likeTweet = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const likedTweet = await Like.findOne({
      user_id: req.user._id,
      tweet: tweetId,
    });
    if (likedTweet) {
      await Like.findByIdAndDelete(likedTweet._id);
      return res
        .status(200)
        .json({ message: "removed a tweet from the like-list successfully" });
    } else {
      const tweet = await Tweet.findById(tweetId);
      await Like.create({
        user_id: req.user._id.toString(),
        tweet: tweet,
        liked_at: Date.now(),
      });

      await Notification.create({
        user_id: tweet.created_by,
        created_at: Date.now(),
        type: "like",
        tweet: tweet,
        by: req.user,
      });
    }
    return res.status(200).json({ message: "liked tweet successfully" });
  } catch (e) {
    console.error("liked tweet error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const retweet = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const retweeted = await Retweet.findOne({
      user_id: req.user._id,
      tweet: tweetId,
    });
    if (retweeted) {
      await Retweet.findByIdAndDelete(retweeted._id);
      return res
        .status(200)
        .json({ message: "removed a retweet successfully" });
    } else {
      const tweet = await Tweet.findById(tweetId);
      await Retweet.create({
        user_id: req.user._id,
        tweet: tweet,
        retweeted_at: Date.now(),
      });
      await Notification.create({
        user_id: tweet.created_by,
        created_at: Date.now(),
        type: "retweet",
        tweet: tweet,
        by: req.user,
      });
      return res.status(200).json({ message: "retweet successfully" });
    }
  } catch (e) {
    console.error("retweet error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const savedTweets = async (req, res) => {
  try {
    const tweets = await SavedTweet.find({ user_id: req.user._id }).sort({
      created_at: -1,
    });
    return res
      .status(200)
      .json({ message: "fetched tweets successfully", tweets });
  } catch (e) {
    console.error("fetch tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const likedTweets = async (req, res) => {
  try {
    const tweets = await Like.find({ user_id: req.user._id }).sort({
      created_at: -1,
    }).populate({
      path: 'tweet',      
      populate: {path:'created_by',select:"username joined_at name bio header_picture_url profile_picture_url"}
    })
    return res
      .status(200)
      .json({ message: "fetched tweets successfully", tweets });
  } catch (e) {
    console.error("fetch tweets error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

export {
  createTweet,
  getAllTweets,
  getFollowingTweets,
  getUserTweets,
  getTweetComments,
  getTweetQuotes,
  saveTweet,
  likeTweet,
  retweet,
  savedTweets,
  likedTweets,
};
