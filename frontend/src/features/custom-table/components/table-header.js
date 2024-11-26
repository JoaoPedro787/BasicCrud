import React, { useRef } from "react";
import { columnData } from "./data/table-header-data";
import { UseUncheckedBox } from './hooks/use-table-header-effect';

const TableHeader = ({ isChecked }) => {
    const { setCheckBox, allCheckBoxes } = isChecked;

    const checkBoxRef = useRef(null);

    // Effect
    UseUncheckedBox(checkBoxRef,allCheckBoxes);
    
    const setAllTrue = () => {
        return setCheckBox((prev)=>{
            const newArray = prev.map((el)=>({id:el.id,state:checkBoxRef.current.checked}));
            return newArray;
        })
    };

    return (
        <tr
            className="bg-gray-200"
        >
            <th>
                <input
                    type="checkbox"
                    className="size-6"
                    ref={checkBoxRef}
                    onChange={() => setAllTrue()}
                />
            </th>

            {columnData.map((el) => (
                <th
                    className={`${el.style}`}
                    key={el.id}
                >
                    {el.value}
                </th>
            ))}
        </tr>
    );
};

export { TableHeader };