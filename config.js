import { config } from "dotenv";
config();
export default {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};
