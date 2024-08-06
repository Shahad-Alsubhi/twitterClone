import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Notification from "../models/notification.js";
import Follow from "../models/followes.js";
import nodemailer from "nodemailer";

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
    const {
      username:Username,
      joined_at,
      name:Name,
      bio,
      header_picture_url,
      profile_picture_url
    }= newUser
  
    const token = jwt.sign({ userId: newUser._id ,profileData:{
      username:Username,
      joined_at,
      name:Name,
      bio,
      header_picture_url,
      profile_picture_url
    }}, process.env.SECRET, {
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
        const {
          username:Username,
          joined_at,
          name:Name,
          bio,
          header_picture_url,
          profile_picture_url
        }=userRecord
        const token = jwt.sign({ userId: userRecord._id,profileData:{
          username:Username,
          joined_at,
          name:Name,
          bio,
          header_picture_url,
          profile_picture_url
        } }, process.env.SECRET, {
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
    console.error("login error:", e);

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

// const resetPassword = async (req, res) => {
//   try {
//     const email = req.user.email;

//     const userRecord = await User.findOne({ email });

//     if (userRecord != null) {
//       if (await bcrypt.compare(req.body.pre_password, userRecord.password)) {
//         const salt = await bcrypt.genSalt(12);
//         const hashedpassword = await bcrypt.hash(req.body.newPassword, salt);
//         userRecord.password = hashedpassword;
//         userRecord.save();

//         return res
//           .status(200)
//           .json({ message: "password changed successfully" });
//       } else {
//         return res.status(400).json({ message: "previous password incorrect" });
//       }
//     } else {
//       throw new Error("could not find user");
//     }
//   } catch (e) {
//     console.error("reset password error:", e);
//     return res
//       .status(500)
//       .json({ message: "reset password failed. Please try again later." });
//   }
// };

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const userRecord = await User.findOne({ email });

    if (userRecord != null) {
      const token = jwt.sign({ userId: userRecord._id }, process.env.SECRET, {
        expiresIn: "10m",
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "twitterclone.2024@gmail.com",
          pass: process.env.Email_PASSWORD,
        },
      });

      const mailOptions = {
        from: "twitterclone.2024@gmail.com",
        to: email,
        subject: "Reset your password",
        text: `Please click this link to reset your password. \n \n https://twitterclone-wln9.onrender.com/reset-password/${token}`,
      };

       transporter.sendMail(mailOptions, function (error) {
        if (error) {
          return res
            .status(500)
            .json({
              message: "reset password failed. Please try again later.",
            });
        } else {
          return res.status(200).json({
            message:
              "A password reset link has been sent to your email address successfully",
          });
        }
      });
    } else {
      return res.status(400).json({
        message:
          "we couldn't find an account associated with that email address",
      });
    }
  } catch (e) {
    console.error("reset password error:", e);
    return res
      .status(500)
      .json({ message: "reset password failed. Please try again later." });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  try {
    const { userId } = jwt.verify(token, process.env.SECRET);
    const salt = await bcrypt.genSalt(12);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    await User.findByIdAndUpdate({ _id: userId }, { password: hashedpassword });
    return res.status(200).json({ message: "password changed successfully" });
  } catch (e) {
    console.error("reset password error:", e);
    return res
      .status(500)
      .json({ message: "reset password failed. Please try again later." });
  }
};

const getProfileData = async (req, res) => {
  
  try {
    const profileData = await User.findById(req.user._id).select(
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

const getSearchResults=async(req,res)=>{
  try {
    const { searchTerm } = req.params;
    const results= await User.find( { $or: [{name:{$regex:searchTerm,$options:"i"}},{username:{$regex:searchTerm,$options:"i"}}]})
    return res.status(200).json({results})

  
} catch (e) {
  console.error("fetch following error:", e);
  return res
    .status(500)
    .json({ message: "something went wrong, Please try again later." });
}
}

const updateProfile=async(req,res)=>{
  const {name,bio}=req.body
  console.log(req.user._id,"//",req.body,"//",req.files);

  const profile_picture_url= req.files['profilePicture'][0].path
  const header_picture_url= req.files['headerPicture'][0].path
  console.log(req.user._id)

  await User.findByIdAndUpdate(req.user._id, { $set: { name,bio,profile_picture_url,header_picture_url }})
  // console.log(name,bio,profile_picture_url.path,header_picture_url.path)
  res.status(200).json({message:"updated"})
  
}

export {
  signUp,
  login,
  isEmailExist,
  forgotPassword,
  isUsernameAvailable,
  getProfileData,
  getUserNotifications,
  resetPassword,
  followUser,
  getFollowers,
  getFollowing,
  getSearchResults,updateProfile
};
