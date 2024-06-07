const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, } = require('../models');
const ApiError = require('../../utils/ApiError');

dotenv.config();

const login = async (req, res) => {
  try {
    const { email = '', password = '', } = req.body;
    const user = await User.findOne({ where: { email, }, });
    // validasi
    if (!user) throw new ApiError(400, 'Email tidak terdaftar.');
    if (!bcrypt.compareSync(password, user.password)) {
      throw new ApiError(400, 'Password salah.');
    }

    if (bcrypt.compareSync(password, user.password)) {
      // generate token utk user yg success login
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY
      );
      res.status(200).json({
        token,
      });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
    } = req.body;

    // validasi
    const user = await User.findOne({ where: { email, }, });
    const usernameExist = await User.findOne({ where: { username, }, });

    if (user) throw new ApiError(400, 'Email telah terdaftar.');
    if (usernameExist) throw new ApiError(400, 'Username telah digunakan.');

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // buat user baru
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).send();
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { login, register, };