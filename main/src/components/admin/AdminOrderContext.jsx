import { createContext, useState } from "react";

export const AdminOrderContext = createContext(0);

export const AdminContextProvider = ({ children }) => {
    const [CustomerOrders, setCustomerOrders] = useState([])

    const AllCustomerOrders = (data) => {
        setCustomerOrders(data)
    }
    const values = {
        CustomerOrders,
        setCustomerOrders,
        AllCustomerOrders
    }

    return (<AdminOrderContext.Provider value={values}>{children}</AdminOrderContext.Provider>)
}