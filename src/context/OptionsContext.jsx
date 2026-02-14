import { createContext } from "react";
import { toast } from "react-toastify";
import data from "../data/data.js";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useLocalStorage("language", "en");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
        toast.success(data[language].notification);
    }

    return (
        <OptionsContext.Provider value={{language,toggleLanguage, data}}>
            {children}
        </OptionsContext.Provider>
    );
}