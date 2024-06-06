const express = require('express');
const cors = require('cors');
const router = require('./app/routers');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;