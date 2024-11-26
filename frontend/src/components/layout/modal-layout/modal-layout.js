import React from 'react';

// Icons
import { BsXLg } from 'react-icons/bs';

// Components
import { ButtonC } from '../../ui/modal-button';
import { InputC } from '../../ui/modal-input';

// utils
import { ModalHandler } from '../../../utils/handle-modal';

const ModalLayout = ({ ModalStates }) => {
    // Os dados da modal vem do state modal open, fazendo um objeto custom ex : {title,input e buttons} independentes;
    const { modalOpen } = ModalStates;

    const { closeModal } = ModalHandler();

    const { buttons, inputs, title, text } = modalOpen.items;

    // Armazenar valores
    let inputsStates = [];

    if(inputs){
        inputs.map((_el)=>inputsStates.push(''));
    }

    return (
        <div className='flex flex-col fixed w-[500px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
            <header className='flex flex-shrink justify-between p-6 text-2xl border-b-[1px]'>
                {title}
                <BsXLg
                    className='cursor-pointer transition-all hover:text-red-500 active:-translate-y-1'
                    onClick={() => closeModal()}
                />
            </header>

            <main className='flex flex-1 flex-col justify-between'>

                {/* Inputs section */}
                <section
                    className='flex flex-col gap-2 p-6'>

                    {text}

                    {inputs?.map((item, index) => (
                        <InputC key={index} style={item} values={{inputsStates,index}}/>
                    ))}

                </section>

                {/* Buttons section */}
                <section
                    className='flex justify-end items-center w-full h-[100px] bg-slate-100 gap-8 p-6'>
                    {buttons.map((el, index) => (
                        <ButtonC key={index} style={el.style} handlePress={el.action} isInput={inputsStates} />
                    ))}

                </section>
            </main>
        </div>
    )
};

export { ModalLayout };