const express = require('express');
const categoryController = require('../controllers/categoryController');
const { create } = require('../models/category');

const router = express.Router();

router.get('/all',categoryController.getAll);

router.post('/create',categoryController.create);

router.put('/update/:id',categoryController.update);

router.delete('/delete/:id',categoryController.delete);

module.exports = router;