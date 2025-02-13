import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "willchangelater";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 5);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordDigest = await bcrypt.hash(password, parseInt(SALT_ROUNDS));

    const user = new User({
      email,
      username,
      passwordDigest,
    });
    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);

    res.status(201).json({ token });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select(
      "email username passwordDigest"
    );

    if (await bcrypt.compare(password, user.passwordDigest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };
      const token = jwt.sign(payload, TOKEN_KEY);

      res.status(201).json({ token });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);

    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).json({ error: "Not Authorized" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("posts").populate("threadId");
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = await User.findByIdAndUpdate(
      id,
      
      { passwordDigest: password },
      { new: true }
    );
    return res.status(200).json({ status: true, data: user });
  } catch (e) {
    return res.status(400).json({ status: false, error: e });
  }
};
// try {
//   const { id } = req.params
//   const {body} = req;
//   if(user){
//
//   } else {

//   }

//   res.status(200).json(user);
// } catch (e) {
//   res.status(500).json({error: e.message})
// }

// const {body} = req

// if (user) {
//   res.json(user)
// } else {
//   res.status(404).json({error: "Cannot be updated"})
// }
