const fs = require('fs');

const ENV_FILE = "/.env";

function load(root) {
  var ENV_FILE_PATH = root + ENV_FILE;

  console.log(ENV_FILE_PATH);

  // set the root directory in environment
  process.env.DIR = root;

  if (!fs.existsSync(ENV_FILE_PATH)) {
    console.log("Environment file not present.");
    return;
  }

  // gets the file content
  var fileContent = fs.readFileSync(ENV_FILE_PATH, 'UTF-8');

  // parses the file content
  var envKeyValues = parse(fileContent);

  // sets the env 
  setEnv(envKeyValues);
}

function parse(fileContent) {
  var ob = {};
  var lines = fileContent.split(/\n/g);

  for (var line of lines) {
    var matches = (/(.+?)=(.+)/gi).exec(line);
    ob[matches[1]] = matches[2];
  }

  return ob;
}

function setEnv(envKeyValues) {
  for (var key in envKeyValues) {
    var value = envKeyValues[key];
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

module.exports = {
  load: load
}
