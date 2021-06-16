require('dotenv').config();

export const SECRET_KEY = {
  USER_ID: process.env.REACT_APP_USER_ID,
  ACCESS_TOKEN: process.env.REACT_APP_ACCESS_TOKEN,
  SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
};