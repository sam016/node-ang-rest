"use strict";

const mongoose = require('../mongoose');
const chalk = require('chalk');
const promise = require('promise');
const randomInt = require('random-int');

// loading the necessary environment variables
require('dotenv').config();

//  Connecting mongo DB
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = promise;

//  Loading models
const Food = require('../models/food');


/**
 * Attaching a new function SEED on the base mongoose Model 
 * which basically just wraps the create function,
 * but actually returns a promise object
 */
mongoose.Model.seed = function (entities) {
  var self = this;
  return new Promise((resolve, reject) => {
    self.create(entities, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
};


console.log(chalk.blue('Removing food...'));

// Reset collections
Food
  .remove().exec()

  // Seed
  .then(() => {
    console.log(chalk.blue('Seeding food...'));
    return Food.seed(require('./food.json'));
  })

  // Finito!
  .then(() => {
    console.log(chalk.green('Successfully seeding completed.'));
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(chalk.red('Error occured while seeding!!!'));
    console.log(chalk.red(err));
    mongoose.connection.close();
  });
