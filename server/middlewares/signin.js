import Joi from "joi";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { isEmailExist, isUsernameAvailable } from "../repositories/userRepo.js";

const requireLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "authorization token required" });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "authorization token required" });
  }

  try {
    const { userId } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id: userId });
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "invalid token" });
  }
};

const validateSignupForm = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().min(6).required(),
      username: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    } else if (await isEmailExist(req.body.email)) {
      return res.status(400).json({ message: "email already exists" });
    } else if (!(await isUsernameAvailable(req.body.username))) {
      return res.status(400).json({ message: "username is not available" });
    }
    next();
  } catch (error) {
    console.error("validate signup form error:", error);
    return res
      .status(500)
      .json({ message: "Signup failed. Please try again later." });
  }
};

const validateLoginForm = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    }
    next();
  } catch (error) {
    console.error("validate login form error:", error);

    return res
      .status(500)
      .json({ message: "login failed. Please try again later." });
  }
};

function makeAdder(){
  const adder=10
  return function(value){
    return adder+value
  }
}




export { validateLoginForm, validateSignupForm, requireLogin };
