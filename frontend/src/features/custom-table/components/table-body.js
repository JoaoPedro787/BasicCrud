import React from "react";
import { HandleReq } from "./hooks/use-table-body-hook";
import { ModalHandler } from "../../../utils/handle-modal";

const TableBody = ({ data, isChecked, refreshPage }) => {
  const { openModal } = ModalHandler();

  const { allCheckBoxes, setCheckBox } = isChecked;

  // Array das ações
  const { actionsData } = HandleReq(refreshPage);

  // Capturar ID do usuário
  let userId;

  // Checkbox
  const HandleChange = (evt, index) => {
    const check = evt.target.checked;

    return setCheckBox((prev) => {
      const newArray = [...prev];
      newArray[index].state = check;
      return newArray;
    });
  };

  return (
    <>
      {/* User info */}
      {data.map((el, rowIndex) => (
        <tr className="border-2" key={rowIndex}>
          {/* Checkbox */}
          <td>
            <input
              type="checkbox"
              className="size-6"
              checked={allCheckBoxes[rowIndex]?.state || false}
              onChange={(evt) => HandleChange(evt, rowIndex)}
            />
          </td>

          {/* Mapeia valores do objeto do usuário */}
          {(() => {
            const userValues = Object.values(el); // Armazena os valores do usuário
            userId = el.id; // Armazenando ID

            return userValues.map((item, colIndex) => (
              <td key={colIndex}>{item}</td>
            ));
          })()}

          {/* Actions */}
          <td className="flex justify-center gap-6">
            {actionsData.map((item, index) => (
              <span
                key={index}
                className={`text-2xl cursor-pointer transition-all
                  hover:scale-125 hover:opacity-60
                  active:opacity-100 active:-translate-y-2
                `}
                onClick={() => openModal(item.function(userId))}
              >
                {item.icon}
              </span>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
};

export { TableBody };