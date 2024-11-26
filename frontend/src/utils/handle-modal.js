import { useContext } from "react";

//Context
import { ModalContext } from "../contexts/modal-context/modal-context";

// Implementar items
const ModalHandler = () => {
    const { ModalStates } = useContext(ModalContext);
    const { setModal } = ModalStates;

    // Essa função é para passar dados para o modal, reutilizando o layout.
    const openModal = (data) => {
        return setModal((prev) => ({ items: data, state: !prev.state }));
    };

    const closeModal = () => {
        return setModal(() => ({ items: null, state: false }));
    }

    return { openModal, closeModal };
};

export { ModalHandler };