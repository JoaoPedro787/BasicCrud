import React from 'react';
import { ModalHandler } from '../../utils/handle-modal';

const Overlay = () => {
    const {closeModal} = ModalHandler();

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={()=>closeModal()}
        />
    );
};

export { Overlay };