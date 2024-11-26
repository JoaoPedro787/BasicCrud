import React from 'react'
import { ModalHandler } from '../../utils/handle-modal';

const ButtonC = ({ style, handlePress, isInput }) => {
    const { title, bgColor, textColor } = style;

    const { closeModal } = ModalHandler();

    return (
        <button
            className={`w-[130px] h-[50px] ${bgColor} ${textColor} 
        transition-all hover:opacity-70 hover:scale-110 hover:-translate-y-1 active:opacity-100`}
            onClick={async () => {
                await handlePress?.(isInput || null);
                return closeModal();
            }}
        >
            {title}
        </button>
    )
};

export { ButtonC };