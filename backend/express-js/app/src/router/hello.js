const express = require('express');
const { HelloWorld } = require('./../controller/hello');

const HelloRouter = express.Router();

HelloRouter.get('/', HelloWorld);

module.exports = HelloRouter;
