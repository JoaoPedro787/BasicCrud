const responseHandler = (err, data) => {
    if (err) {
        throw new Error(err.response.data.message);
    };

    return data.data;
};

export { responseHandler };