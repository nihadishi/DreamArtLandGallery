import { createContext, useState } from "react";

export const FavContext = createContext(0);

export const FavContextProvider = ({ children }) => {
    const [Fav, setFav] = useState([])
    const values = {
        Fav,
        setFav,
    };
    console.log(Fav);
    return <FavContext.Provider value={values}>{children}</FavContext.Provider>

}