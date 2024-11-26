const to = (promise) => {
    return promise
        .then((response) => ({ 'error': null, 'data': response }))
        .catch((err) => ({ 'error': err, 'data': null }));
};

module.exports = { to };