import mongoose from "mongoose";
import "dotenv/config";
import express, { json } from "express";
import path from "path";
import { fileURLToPath } from "url";
import User from "./user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

//for parsing anything in json have to write
//this always remember it ok
//its middleware in every code this is compulsory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

//connecting db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successfull Connected!!"))
  .catch((err) => console.log("Something went wrong", err));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email, password, dob, phone } = req.body;
    const newUser = new User({ name, email, password, dob, phone });
    await newUser.save();
    res.status(201).json({ message: "new User created successfully" });
  } catch (error) {
    console.log("Getting error", error);
    res.status(500).json({ error: "Error processing request" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
    console.log(user);
  } catch (error) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "failed to fetch users" });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User removed successfully" });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running in ${PORT}`);
});
