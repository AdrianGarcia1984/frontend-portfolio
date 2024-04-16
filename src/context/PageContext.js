import React, { createContext, useEffect, useState, useContext } from "react";

const PageContext = createContext();

const PageProvider =(props)=>{
    const [lang, setLang]= useState("es")
    const [dark, setDark]=useState(false)

    useEffect(() => {
        const initial = JSON.parse(localStorage.getItem("lang"))
        initial ? initial.login && setUser(initial) : setLang("es");
    }, []);

    

    return <UserContext.Provider value={value} {...props} />;
}

export function usePage() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage error");

    }
    return context;
}