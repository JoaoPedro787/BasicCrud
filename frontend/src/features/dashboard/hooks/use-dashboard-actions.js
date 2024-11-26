// Contexts
import { useContext } from "react";
import { AppContext } from '../../../contexts/app-context/index';

//Services
import { DeleteUser, CreateUser } from '../../../services/user-service';

const DashActions = () => {

    // Delete users
    const { CheckBoxStates, setRefresh } = useContext(AppContext);
    const { allCheckBoxes, setCheckBox } = CheckBoxStates;

    const deleteAllUser = async () => {
        if (allCheckBoxes.length > 0) {
            const filteredArray = allCheckBoxes.filter((el) => el.state === true);

            for (const item of filteredArray) {
                await DeleteUser(item.id)
                    .catch((err) => alert(err.message))
            };

            setCheckBox([]);
            return setRefresh(true);
        }
    };
    //

    //Create a new User
    const createNewUser = async (inputValues) => {
        const data = { email: inputValues[0], password: inputValues[1] }
        return await CreateUser(data)
            .then((response) => alert(response.message))
            .catch((err) => alert(err.message))
            .finally(() => setRefresh(true));
    };
    //

    return { deleteAllUser, createNewUser };
};

export { DashActions };