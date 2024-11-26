const express = require('express');
require('express-async-errors');
const cors = require('cors');

const router = require('./router');

const app = express();

const globalMiddleWare = require('../middleware/global');

app.use(cors());
app.use(express.json());

app.use(router);
app.use(globalMiddleWare);

require('dotenv').config();

const PORT = process.env.DB_PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});

module.exports = app;