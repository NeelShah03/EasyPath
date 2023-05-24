import React, { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteContextProvider = ({ children }) => {
    const [duration, setDuration] = useState(0);
    const [distance, setDistance] = useState(0);

    const contextValue = { duration, distance, setDistance, setDuration };
    return (
        <RouteContext.Provider value={contextValue}>
            {children}
        </RouteContext.Provider>
    );
};
