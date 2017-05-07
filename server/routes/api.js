const express = require('express');
const HttpStatus = require('http-status-codes');

const Food = require('../models/food');

const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  sendError(res, 'Endpoint not implemented', HttpStatus.NOT_IMPLEMENTED);
});

/* GET menu. */
router.get('/food', (req, res) => {
  sendCollectionData(req, res, Food);
});

function sendCollectionData(req, res, model, population) {
  model
    .aggregate(
      [{
        $project: model.PROJECTION_ALIASES
      }, {
        $sort: {
          Date: -1
        }
      }]
    )
    .then((items) => {
      sendResult(req, res, items);
    })
    .catch((err) => {
      console.log(err);
      sendError(res, 'Error occured', HttpStatus.INTERNAL_SERVER_ERROR, {
        extra: err
      });
    })
}

function sendError(res, error, code = 500, extra = {}) {
  var data = extra || {};
  data.error = error;

  res
    .status(code)
    .json(data);
}

function sendResult(req, res, result, code = 200, extra = {}) {
  var data = extra || {};
  var query = req.query || {};

  data.result = result;

  res
    .status(code || 200)
    .contentType('application/json')
    .send(JSON.stringify(data, null, 'formatted' in query ? 2 : 0));
}

module.exports = router;
