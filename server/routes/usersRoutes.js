import express from "express";
import {
  requireLogin,
  validateLoginForm,
  validateSignupForm,
} from "../middlewares/signin.js";
import {
  login,
  signUp,
  resetPassword,
  forgotPassword,
  getProfileData,
  getUserNotifications,
  followUser,
  getFollowers,
  getFollowing,
  getSearchResults,
  updateProfile
} from "../repositories/userRepo.js";
import upload from "../config/cloudinary.js";


const router = express.Router();

router.post("/login", validateLoginForm, login);

router.post("/signup", validateSignupForm, signUp);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/:userId/profile", getProfileData);

router.get("/notifications", requireLogin, getUserNotifications);

router.post("/follow/:followingId", requireLogin, followUser);

router.get("/:userId/followers", getFollowers);

router.get("/:userId/following", getFollowing);

router.get("/search/:searchTerm", getSearchResults);

router.patch("/update-profile",requireLogin, upload.fields([{name:"profilePicture",maxCount:1},{name:"headerPicture",maxCount:1}]) , updateProfile)


export default router;
