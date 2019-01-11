'use strict';
// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = app => {

  // Here we've add our isAuthenticated middleware to this route.
  app.get('/signup', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/homepage.html'));
  });
};
