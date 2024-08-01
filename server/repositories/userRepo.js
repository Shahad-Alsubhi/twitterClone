import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Notification from "../models/notification.js";
import Follow from "../models/followes.js";

const signUp = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    const newUser = new User({
      name,
      email,
      password,
      username,
      joined_at: Date.now(),
    });
    const salt = await bcrypt.genSalt(12);
    const hashedpassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedpassword;
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, {
      expiresIn: "10h",
    });

    return res.status(200).json({ message: "successful signup", token });
  } catch (e) {
    console.error("Signup error:", e);
    return res
      .status(500)
      .json({ message: "Signup failed. Please try again later." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRecord = await User.findOne({ email });

    if (userRecord != null) {
      if (await bcrypt.compare(password, userRecord.password)) {
        const token = jwt.sign({ userId: userRecord._id }, process.env.SECRET, {
          expiresIn: "10h",
        });
        return res.status(200).json({ message: "successful login", token });
      } else {
        return res.status(400).json({ message: "email/password incorrect" });
      }
    } else {
      return res.status(400).json({ message: "email/password incorrect" });
    }
  } catch (e) {
    console.error("Signup error:", e);

    return res
      .status(500)
      .json({ message: "login failed. Please try again later." });
  }
};

const isEmailExist = async (email) => {
  try {
    if ((await User.findOne({ email })) !== null) {
      return true;
    } else return false;
  } catch (e) {
    console.error(
      "Failed to check whether the email already exists or not: ",
      e
    );
    return res
      .status(500)
      .json({ message: "An error occurred, Please try again later." });
  }
};

const isUsernameAvailable = async (username) => {
  try {
    if ((await User.findOne({ username })) !== null) {
      return false;
    } else return true;
  } catch (e) {
    console.error("username availability check error:", e);
    return res.status(500).json({
      message: "username availability check failed. Please try again later.",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const email = req.user.email;

    const userRecord = await User.findOne({ email });
    console.log(userRecord);

    if (userRecord != null) {
      if (await bcrypt.compare(req.body.pre_password, userRecord.password)) {
        const salt = await bcrypt.genSalt(12);
        const hashedpassword = await bcrypt.hash(req.body.newPassword, salt);
        userRecord.password = hashedpassword;
        userRecord.save();

        return res
          .status(200)
          .json({ message: "password changed successfully" });
      } else {
        return res.status(400).json({ message: "previous password incorrect" });
      }
    } else {
      throw new Error("could not find user");
    }
  } catch (e) {
    console.error("reset password error:", e);
    return res
      .status(500)
      .json({ message: "reset password failed. Please try again later." });
  }
};

const getProfileData = async (req, res) => {
  try {
    const profileData = await User.findById(req.params.userId).select(
      "username joined_at name bio header_picture_url profile_picture_url"
    );
    return res
      .status(200)
      .json({ message: "fetched profile data successfully", profileData });
  } catch (e) {
    console.error("fetch profile data error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      read: { $ne: true },
      user_id: req.user._id,
    });
    notifications.map(async (notification) => {
      await Notification.findByIdAndUpdate(notification._id, {
        $set: { read: true },
      });
    });

    return res
      .status(200)
      .json({ message: "fetched notifications successfully", notifications });
  } catch (e) {
    console.error("fetch profile data error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getFollowers = async (req, res) => {
  try {
    const followers = await Follow.find({ following_id: req.params.userId });
    return res
      .status(200)
      .json({ message: "fetched followers successfully", followers });
  } catch (e) {
    console.error("fetch followers error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const getFollowing = async (req, res) => {
  try {
    const following = await Follow.find({ follower_id: req.params.userId });
    return res
      .status(200)
      .json({ message: "fetched following successfully", following });
  } catch (e) {
    console.error("fetch following error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

const followUser = async (req, res) => {
  try {
    const { followingId } = req.params;
    const followRelation = await Follow.findOne({
      follower_id: req.user._id,
      following_id: followingId,
    });
    console.log(followRelation);
    if (!followRelation) {
      await Follow.create({
        follower_id: req.user._id,
        following_id: followingId,
      });
      return res
        .status(200)
        .json({ message: "user added to following list successfully" });
    } else {
      await Follow.findByIdAndDelete(followRelation._id);
      return res
        .status(200)
        .json({ message: "user removed from following list successfully" });
    }
  } catch (e) {
    console.error("follow error:", e);
    return res
      .status(500)
      .json({ message: "something went wrong, Please try again later." });
  }
};

export {
  signUp,
  login,
  isEmailExist,
  resetPassword,
  isUsernameAvailable,
  getProfileData,
  getUserNotifications,
  followUser,
  getFollowers,
  getFollowing,
};
