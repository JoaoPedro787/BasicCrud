import { useState } from "react";

const ModalHook = () => {
    const [modalOpen, setModal] = useState({ items: null, state: false });

    const ModalStates = { modalOpen, setModal };

    return { ModalStates };
};

//erro está aqui
export { ModalHook };