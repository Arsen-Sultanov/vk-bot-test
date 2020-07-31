const mongoose = require('mongoose');
const { url } = require('../config').mongo;

mongoose.connect(url, { useNewUrlParser: true,
  useUnifiedTopology: true });

mongoose.connection.on('open', ()=> {
  console.log('mongo connected');
});

mongoose.connection.on('error', err=> {
  console.log('mongo error');
  console.error(err);
});

mongoose.Promise = require('bluebird');
