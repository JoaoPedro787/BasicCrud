const server = require('./app');

require('dotenv').config();

const PORT = process.env.DB_PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});