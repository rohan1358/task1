const express = require('express');
const product = require('./product');
const category = require('./category');


const Router = express.Router();

Router.use('/product', product);
Router.use('/category', category);

Router.use
module.exports = Router;