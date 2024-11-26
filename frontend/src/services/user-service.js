import api from './api';
import { to } from '../utils/async-promise';
import { responseHandler } from '../utils/handle-api-request';

const CreateUser = async (object) => {
    const { error, data } = await to(api.post('/user', object));
    return responseHandler(error, data);
};

const GetUsers = async () => {
    const { error, data } = await to(api.get('/user'));
    return responseHandler(error, data);
};

const UpdateUser = async (email, object) => { 
    const { error, data } = await to(api.put(`/user/${email}`, object)); 
    return responseHandler(error, data);
};

const DeleteUser = async (id) => {
    const { error, data } = await to(api.delete(`/user/${id}`));
    return responseHandler(error, data);
};

export { GetUsers, CreateUser, UpdateUser, DeleteUser };