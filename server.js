'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('./knex');

app.disable('x-powered-by');

app.use(express.static('public'));

//require routes
// const index = require('./routes/index');
// app.use(index);

app.get('/users', (req, res) => {
  knex('users')
  .orderBy('first_name')
  .then((users) => {
    res.send(users);
  });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
