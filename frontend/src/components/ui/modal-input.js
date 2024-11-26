import React from 'react'

const InputC = ({ style, values }) => {
    const { title, type } = style;
    const { inputsStates, index } = values;

    return (
        <div
            className='flex flex-col gap-2 p-6'>
            <span>
                {title}
            </span>

            <input
                className='flex-1 border-[1px] p-2'
                type={type}
                required={true}
                onChange={(evt) => inputsStates[index] = evt.target.value}
            />

        </div>
    )

};

export { InputC };