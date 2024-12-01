const { Conflict, NotFound } = require('../helpers/api-custom-error');
const { to } = require('../helpers/async-handler');

const { newUser, getAllUsers, updateUser, deleteUser } = require('../models/user-model');

const NewUserController = async (req, res, next) => {
    const { email, password } = req.body;

    const { error } = await to(newUser(email, password));

    if (error) {
        return error.code === 'ER_DUP_ENTRY'
            ? (next(new Conflict('User already exists')))
            : (next(new NotFound('Error inserting user')));
    }

    return res.status(201).json({ 'message': 'User inserted into the database!' });
}

const getAllUsersController = async (_req, res, next) => {
    const { error, data } = await to(getAllUsers());

    if (error) {
        console.log(error.message)
        return next(new NotFound('Users not found.'))
    }

    return res.status(200).json(data);
}

const updateUserController = async (req,res,next) => {
    const {id} = req.params;
    const {password} = req.body;

    const {error} = await to(updateUser(id,password));

    if (error){
        return next(new NotFound('Error when updating user.'));
    }
    
    return res.status(204).end();
};

const deleteUserController = async (req,res,next) => {
    const {id} = req.params;

    const {error} = await to(deleteUser(id));

    if (error){
        return next(new NotFound('Error when deleting user.'));
    }

    return res.status(204).end();
};

module.exports = { NewUserController, getAllUsersController, updateUserController, deleteUserController };