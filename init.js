import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT_NUM;

const handleListen = () =>
  console.log(`✔  Listen on port : https://localhost:${PORT}`);

app.listen(PORT, handleListen);