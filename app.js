const createError = require('http-errors');
const express = require('express');
const app = express();

// middleware configurations
require("./configs/middleware.config")(app);
// mongodb
require("./configs/db.config")();
// session
require("./configs/session.config")(app);


// Routes
const authRouter = require('./routes/auth.routes');
app.use('/auth', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
