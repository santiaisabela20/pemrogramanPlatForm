const express = require('express');
const { body, validationResult } = require('express-validator');
const joi = require('joi');

const app = express();
const port = 3000;

app.use(express.json());

// Middleware untuk validasi input route menggunakan express-validator
const validateInput = [
  body('username').isLength({ min: 5 }).withMessage('panjang username minimal 5 karakter'),
  body('email').isEmail().withMessage('format email tidak valid'),
];

// Middleware untuk validasi input route menggunakan joi
const validateInputJoi = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(5).required(),
    email: joi.string().email().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].msg });
  }
  next();
};

// Contoh route dengan validasi express-validator
app.post('/user', validateInput, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  // Pemrosesan data user
  res.json({ message: 'Data user valid!' });
});

// Contoh route dengan validasi menggunakan joi
app.post('/user-joi', validateInputJoi, (req, res) => {
  res.json({ message: 'Data user valid!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
