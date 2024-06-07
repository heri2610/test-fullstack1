const { body, validationResult } = require('express-validator');

const midlewareValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = {};
      errors.array().map(err => extractedErrors[err.path] = err.msg);
      return res.status(422).json({errors:extractedErrors});
    }
    next();
}

const validateFilm = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('image_thumbnail').notEmpty().withMessage('Image is required'),
    midlewareValidation
];

const authValidation = [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required'),
];

const loginValidation = [
    ...authValidation,
    midlewareValidation
];

const registerValidation = [
    ...authValidation,
    body('username').notEmpty().withMessage('Username is required'),
    midlewareValidation
];

module.exports = { validateFilm, loginValidation, registerValidation };
