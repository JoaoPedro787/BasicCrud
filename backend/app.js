const express = require('express');
require('express-async-errors');
const cors = require('cors');

const router = require('./routes/router');

const app = express();

const globalMiddleWare = require('./middleware/global');

app.use(cors());
app.use(express.json());

app.use(router);
app.use(globalMiddleWare);

module.exports = app;