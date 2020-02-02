const express = require('express');

const Router = express.Router();
const categoryController = require('../controllers/category');

Router
.get('/', categoryController.getCategory)
.get('/:id_category', categoryController.categoryDetail)
.post('/',  categoryController.insertCategory)
.patch('/:id_category', categoryController.updateCategory)


module.exports = Router;
