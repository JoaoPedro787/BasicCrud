const to = (promise) => {
    return promise
        .then((response) => ({ data: response, error: null }))
        .catch((err) => ({ data: null, error: err }));
};

export { to }