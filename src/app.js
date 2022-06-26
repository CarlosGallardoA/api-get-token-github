import express from "express";
import cors from "cors";

const app = express();
//settings
app.set("port", process.env.PORT || 5000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//Routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

export default app;
