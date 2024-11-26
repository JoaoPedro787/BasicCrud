import { useState } from "react";
import { DataFetchEffect } from './use-data-fetch-effect';
import { HasData } from "./use-has-data-effect";
import { useRefreshPage } from "./use-refresh-page-effect";

const TableHook = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [allCheckBoxes, setCheckBox] = useState([]);
    const [refresh,setRefresh] = useState(true);

    // Effects
    DataFetchEffect(setLoading, setData, refresh);
    HasData(setCheckBox,data);
    useRefreshPage(refresh,setRefresh);

    // Objects
    const InitialStates = { isLoading, data };
    const CheckBoxStates = { allCheckBoxes, setCheckBox };

    return ({ InitialStates, CheckBoxStates, setRefresh });

};

export { TableHook };