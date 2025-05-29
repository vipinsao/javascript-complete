import mongoose from "mongoose";
import "dotenv/config";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dob: String,
  phone: String,
});

const User = mongoose.model("User", userSchema);

export default User;
