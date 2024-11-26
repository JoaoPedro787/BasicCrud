import { useEffect, useCallback } from "react";
import { GetUsers } from '../../../services/user-service';

const DataFetchEffect = (setLoading, setData, refresh) => {

    const asyncFetch = useCallback(() => {
        return GetUsers()
            .then((response) => setData(response))
            .catch(() => setData([]))
            .finally(() => setLoading(false));
    }, [setData, setLoading]); 

    useEffect(() => {
        if (refresh) {
            asyncFetch();
        }
    }, [refresh, asyncFetch]); 
};

export { DataFetchEffect };
