'use strict';

var app = require('../app');

function main(req, res) {
  res.send('Server nodetest is up');
}

// Routes
app.get('/', main);
