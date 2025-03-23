const Marketplace = require('../models/Marketplace');

// Add Product to Marketplace
exports.addProduct = async (req, res) => {
  const { userId, productName, description, price } = req.body;

  try {
    const product = new Marketplace({
      userId,
      productName,
      description,
      price,
    });

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Products from Marketplace
exports.getProducts = async (req, res) => {
  try {
    const products = await Marketplace.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};