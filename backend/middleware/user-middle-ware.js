const { BadRequest } = require('../helpers/api-custom-error');

const UserMiddleWare = (req, _res, next) => {
    const { email, password } = req.body;

    if (email === '' || password === '') {
        throw new BadRequest('Entradas inválidas');
    }
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        throw new BadRequest('Email inválido');
    }

    next();
};

module.exports = { UserMiddleWare };
