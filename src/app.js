import express from "express";
import cors from "cors";
import axios from "axios";
import config from "../config";
const app = express();
//settings
app.set("port", process.env.PORT || 9000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//Routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});
app.post("/user/callback", async (req, res) => {
  const { code } = req.query;

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: config.client_id,
      client_secret: config.client_secret,
      code,
    }
  );

  const access_token = response.data.split("=");
  console.log(access_token);
  return res.status(200).json({
    ok: true,
    data: access_token[1].replace("&scope", ""),
  });
});

export default app;
