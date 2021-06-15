import dotenv from "dotenv";
dotenv.config();
export const SECRET_KEY = {
  USER_ID: process.env.USER_ID,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  SERVICE_ID: process.env.SERVICE_ID,
  TEMPLATE_ID: process.env.TEMPLATE_ID,
};
