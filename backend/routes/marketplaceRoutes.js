const express = require('express');
const { addProduct, getProducts } = require('../controllers/marketplaceController');
const router = express.Router();

// Add Product to Marketplace
router.post('/add', addProduct);

// Get Products from Marketplace
router.get('/', getProducts);

module.exports = router;