// Icons
import { BsFillPersonPlusFill, BsFillTrashFill } from "react-icons/bs";

// Hooks
import { DashActions } from "./use-dashboard-actions";

const DashHook = () => {

    const { deleteAllUser, createNewUser } = DashActions();

    const deleteModalUi = () => {
        const buttonsUi = [
            { style: { title: 'Cancel', bgColor: 'bg-transparent', textColor: 'text-black' } },
            { style: { title: 'Delete', bgColor: 'bg-red-600', textColor: 'text-white' }, action: deleteAllUser },
        ];

        const text = "This action will delete all users. Please proceed with caution."

        return { title: 'Delete users', text: text, buttons: buttonsUi };
    };

    const createModalUi = () => {
        const inputStyle = [
            { title: 'Email:', type: 'email' },
            { title: 'Password:', type: 'password' },
        ]

        const buttonsUi = [
            { style: { title: 'Cancel', bgColor: 'bg-transparent', textColor: 'text-black' } },
            { style: { title: 'Confirm', bgColor: 'bg-green-600', textColor: 'text-white' }, action: createNewUser },
        ];

        return { title: 'Create User', text: 'Please fill in all the inputs correctly to proceed.', buttons: buttonsUi, inputs: inputStyle };
    };


    // Data dos componentes
    const headerData = [
        { id: 0, style: 'bg-red-500', value: 'Delete', icon: <BsFillTrashFill />, action: deleteModalUi },
        { id: 1, style: 'bg-green-500', value: 'Add new user', icon: <BsFillPersonPlusFill />, action: createModalUi }
    ];

    return headerData;
};

export { DashHook };