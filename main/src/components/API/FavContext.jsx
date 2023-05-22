import { createContext, useState } from "react";

export const FavContext = createContext(null);

export const FavContextProvider = ({ children }) => {
    const [Fav, setFav] = useState([])

    const isExist = (id) => {//have?
        return Fav.some((item) => item.id == id)
    }
    const ToggleFav = (data) => {
        if (isExist(data.id)) {//delete
            setFav((oldData) => oldData.filter(z => (data.id !== z.id)))
        }
        else {//add
            setFav([...Fav, data])
        }
    }
    const values = {
        Fav,
        isExist,
        ToggleFav
    }
    return <FavContext.Provider value={values}>{children}</FavContext.Provider>

}
