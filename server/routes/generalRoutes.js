'use strict';

const express   = require('express');
const router    = express.Router();
const productsService    = require("../services/products.service");

/** ---------------------------------------------------------------------------------------------
 * route for login authentification
 --------------------------------------------------------------------------------------------- */
router.get('/products/:idProduct', productsService.getProductById);
router.get('/products', productsService.getProducts);

module.exports = router;

