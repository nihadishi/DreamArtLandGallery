import { createContext, useState } from "react";

localStorage.setItem('LoginorNot', false)
export const IsLogin = createContext(localStorage.getItem('LoginorNot'));

export const IsLoginProvider = ({ children }) => {

    const [LoginorNot, setLoginorNot] = useState(localStorage.getItem('LoginorNot'))

    const values = {
        LoginorNot,
        setLoginorNot
    }

    return (<IsLogin.Provider value={values}>{children}</IsLogin.Provider>)
}