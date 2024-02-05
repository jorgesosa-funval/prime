import React, { createContext, useEffect, useState } from "react";
export const ApiContext = createContext();

export default function Api({ children }) {

    const [data, setData] = useState();
    const [data2, setData2] = useState();

    const getData = async () => {
        const rs = await fetch("https://www.primefaces.org/data/customers")
        const jsonRs = await rs.json()
        setData(jsonRs.customers.slice(0, 5))
        setData2(jsonRs.customers.slice(20, 25))
    }
    

    useEffect(() => {
        getData()
    },[])

    function changeTemperature(temperature, type) {
        
    }

    return <ApiContext.Provider value={{ data, data2 ,changeTemperature}}>

        {children}

    </ApiContext.Provider>;
}
