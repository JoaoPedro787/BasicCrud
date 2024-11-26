const globalMiddleWare = (err, _req, res, _next) => {
    console.log(err);

    const status = err.statusCode || 500;
    const message = err.message && err.statusCode ? err.message : "Erro interno do servidor";

    res.status(status).json({ "message": message });
};

module.exports = globalMiddleWare;