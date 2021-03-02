const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const origin = "http://localhost:3000";

module.exports = (app) => {
  app.use(cors({ origin: [origin], credentials: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};