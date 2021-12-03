const Router = require('express').Router();
const { UserController } = require("../controllers");

Router.post('/api/signin', UserController.signIn);

Router.post('/api/signup', UserController.signUp);

module.exports = Router;
