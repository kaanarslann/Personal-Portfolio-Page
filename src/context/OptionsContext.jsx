import { createContext, useState } from "react";
import { toast } from "react-toastify";
import data from "../data/data.js";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
        toast.success("Language changed successfully!");
    }

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <OptionsContext.Provider value={{language,darkMode,toggleLanguage,toggleDarkMode, data}}>
            {children}
        </OptionsContext.Provider>
    );
}