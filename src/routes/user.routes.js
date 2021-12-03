const Router = require('express').Router()

Router.post('/api/signin', (req, res) => {
  res.send('signin')
});

Router.post('/api/signup', (req, res) => {
  res.send('signup')
});

module.exports = Router;
