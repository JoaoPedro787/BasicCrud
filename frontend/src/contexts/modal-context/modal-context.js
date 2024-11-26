import { createContext } from 'react'
import { ModalHook } from './hooks/modal-hook';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const { ModalStates } = ModalHook();

    return (
        <ModalContext.Provider value={{ ModalStates }}>
            {children}
        </ModalContext.Provider>
    );

};

export { ModalContext };
export default ModalProvider;