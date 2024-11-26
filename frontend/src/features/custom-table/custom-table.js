import React, { useContext } from "react";

// Skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Components
import { TableHeader } from "./components/table-header";
import { TableBody } from "./components/table-body";

// Context
import { AppContext } from '../../contexts/app-context'

const CustomTable = () => {
    const { InitialStates, CheckBoxStates, setRefresh } = useContext(AppContext);

    const { isLoading, data } = InitialStates;

    return (
        isLoading 
        ?
        <div className="w-full h-14 mt-2">
            <Skeleton count={10} width={'100%'} height={'100%'}/>
        </div>
        :
        <table className="w-full table-auto border-collapse border-2">
            <thead>
                <TableHeader isChecked={CheckBoxStates} />
            </thead>

            {/* Adicionar skeleton e em vez de mensagem de erro adicionar uma div com texto */}
            <tbody>
                <TableBody data={data} isChecked={CheckBoxStates} refreshPage={setRefresh} />
            </tbody>
        </table>
    )
};

export { CustomTable };