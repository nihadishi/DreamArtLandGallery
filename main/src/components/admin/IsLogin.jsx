import { createContext, useEffect, useState } from "react";

localStorage.setItem('LoginorNot', false)
export const IsLogin = createContext(false);

export const IsLoginProvider = ({ children }) => {

    const [LoginorNot, setLoginorNot] = useState(localStorage.getItem('LoginorNot'))
    useEffect(() => {
        localStorage.setItem('LoginorNot', false)
    }, [LoginorNot])
    

    const values = {
        LoginorNot,
        setLoginorNot
    }

    return (<IsLogin.Provider value={values}>{children}</IsLogin.Provider>)
}