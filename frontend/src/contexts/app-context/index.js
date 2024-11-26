import { createContext } from "react";
import { TableHook } from "./hooks/use-app-hook";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const {InitialStates, CheckBoxStates, setRefresh} = TableHook();

    return (
        <AppContext.Provider value={{InitialStates,CheckBoxStates,setRefresh}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext }
export default AppProvider;