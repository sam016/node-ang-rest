
//  loading the env variables
require('./server/env').load(__dirname);

const app = require('./server/app');
app
  .init()
  .serve();
