import express from "express";
const app = express();

const PORT = 4000;

const handleListen = () =>
  console.log(`Listen on port : https://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
