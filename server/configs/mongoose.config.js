const mongoose = require('mongoose');
require('dotenv').config();

// .connect(process.env.DB, {useNewUrlParser: true})
mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

module.exports = mongoose