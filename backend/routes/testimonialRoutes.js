const express = require('express');
const { addTestimonial, getTestimonials } = require('../controllers/testimonialController');
const router = express.Router();

// Add Testimonial
router.post('/add', addTestimonial);

// Get Testimonials
router.get('/', getTestimonials);

module.exports = router;