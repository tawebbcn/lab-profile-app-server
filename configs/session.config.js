const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const { SESSION_SECRET, MONGODB_URL } = process.env;
module.exports = (app) => {
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
      store: MongoStore.create({
        mongoUrl: MONGODB_URL,
        ttl: 60 * 60 * 24,
      }),
    })
  );
};