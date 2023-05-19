import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import recent_search from "../data/recent_search";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
    const [recentSearch, setRecentSearch] = useState(recent_search);

    const addSearch = (startPoint, destination, date, time) => {
        setRecentSearch([
            {
                from: startPoint,
                to: destination,
                date: date,
                time: time,
            },
            ...recentSearch,
        ]);
    };

    const contextValue = { recentSearch, addSearch };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

const styles = StyleSheet.create({});
