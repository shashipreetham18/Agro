const Testimonial = require('../models/Testimonial');

// Add Testimonial
exports.addTestimonial = async (req, res) => {
  const { userId, testimonial } = req.body;

  try {
    const newTestimonial = new Testimonial({
      userId,
      testimonial,
    });

    await newTestimonial.save();
    res.json(newTestimonial);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};