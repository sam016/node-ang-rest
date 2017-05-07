const express = require('express');
const compression = require('compression')
const path = require('path');
const logger = require('morgan');
const mongoose = require('./mongoose');
const promise = require('promise');
const bodyParser = require('body-parser');

//  Getting API routes
const api = require('./routes/api');

//	Create Express app
const app = express();

function initializeExpressApp() {

  // Setting the morgan logger to log all requests
  app.use(logger('dev'));


  // compress the response body
  app.use(compression());

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(express.static(path.join(process.env.DIR, 'dist')));

}

function initializeRoutes() {

  // CORS
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Set our api routes
  app.use('/api', api);

  // Catch all other routes and return the index file
  app.get('/*', function (req, res) {
    res.sendFile(path.join(process.env.DIR, 'dist/index.html'));
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};

function initializeDB() {
  mongoose.Promise = promise;
  mongoose.connect(process.env.MONGODB_URI);
}

app.init = function () {
  initializeDB();
  initializeExpressApp();
  initializeRoutes();

  return app;
}

app.serve = function () {
  app.listen(process.env.PORT, function () {
    console.log(process.env.APP_NAME, 'listening on port', process.env.PORT);
  });
}

module.exports = app;
