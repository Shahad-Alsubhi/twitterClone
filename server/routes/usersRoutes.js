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
} from "../repositories/userRepo.js";

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

export default router;
