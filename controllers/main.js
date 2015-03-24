'use strict';

var app = require('../app');

function main(req, res) {
  res.send('Test server is up on heroku');
}

// Routes
app.get('/', main);
