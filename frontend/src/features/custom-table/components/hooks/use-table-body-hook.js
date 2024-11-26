// API
import { to } from '../../../../utils/async-promise';
import { UpdateUser, DeleteUser } from "../../../../services/user-service";

// Icons
import { FaPen, FaUserMinus } from 'react-icons/fa';

const HandleReq = (setRefresh) => {

    // Chamadas API
    const handleDelete = async (id) => {
        console.log(id)
        const { error } = await to(DeleteUser(id));
        return error ? alert(error.message) : setRefresh(true);
    };

    const handleUpdate = async (id, password) => {
        console.log(id)
        const { error } = await to(UpdateUser(id, { password: password[0] }));
        return error ? alert(error.message) : setRefresh(true);
    };

    const editModalUi = (userId) => {
        const buttonsUi = [
            { style: { title: 'Cancel', bgColor: 'bg-transparent', textColor: 'text-black' } },
            {
                style: { title: 'Edit', bgColor: 'bg-yellow-600', textColor: 'text-white' },
                action: (password) => handleUpdate(userId, password),
            },
        ];

        const text = "This action will edit this user's password. Please proceed with caution.";

        const inputStyle = [
            { title: 'Password:', type: 'password' },
        ];

        return { title: 'Edit user', text, buttons: buttonsUi, inputs: inputStyle };
    };

    const deleteModalUi = (userId) => {
        const buttonsUi = [
            { style: { title: 'Cancel', bgColor: 'bg-transparent', textColor: 'text-black' } },
            {
                style: { title: 'Delete', bgColor: 'bg-red-600', textColor: 'text-white' },
                action: () => handleDelete(userId),
            },
        ];

        const text = "This action will delete this user. Please proceed with caution.";

        return { title: 'Delete user', text, buttons: buttonsUi };
    };

    const actionsData = [
        { id: '0', icon: <FaPen className="text-yellow-500" />, function: editModalUi },
        { id: '1', icon: <FaUserMinus className="text-red-500" />, function: deleteModalUi },
    ];

    return { actionsData };
};

export { HandleReq };