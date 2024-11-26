import { useEffect } from "react";

const useRefreshPage = (refresh,setRefresh) => {

    useEffect(() => {
        if (refresh === true) {
            setRefresh(false);
        };
    }, [refresh,setRefresh]);

};

export { useRefreshPage };