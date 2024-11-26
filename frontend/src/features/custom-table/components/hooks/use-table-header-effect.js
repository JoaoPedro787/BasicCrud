import { useEffect, useCallback } from "react";

const UseUncheckedBox = (checkBoxRef, allCheckedBoxes) => {

    const isAll = useCallback(() => {
        const allTrue = allCheckedBoxes.every((el) => el.state === true);
        const someTrue = allCheckedBoxes.some((el) => el.state === true);

        if (allCheckedBoxes.length === 0) {
            return checkBoxRef.current.checked = false;
        };

        checkBoxRef.current.checked = allTrue;
        checkBoxRef.current.indeterminate = allTrue ? false : someTrue;
    }, [allCheckedBoxes, checkBoxRef]);

    useEffect(() => {
        isAll();
    }, [allCheckedBoxes, isAll]); 
};

export { UseUncheckedBox };