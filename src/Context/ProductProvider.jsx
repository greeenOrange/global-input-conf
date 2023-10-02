import { useReducer } from "react";
import { useContext, createContext, useState, useEffect } from "react";
import { initialState, productReducer } from "../State/ProductReducer";
import { actionTypes } from "../State/actionTypes";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        dispatch({type: actionTypes.FETCHING_START})
        const url = `https://my-json-server.typicode.com/greeenOrange/moon-tech-server/products`
        fetch(url)
            .then(res => res.json())
            .then((data) => dispatch({type: actionTypes.FETCHING_SUCCESS, payload: data}))
            .catch(() => dispatch({type: actionTypes.FETCHING_ERROR}))
    }, [])

    return (
        <ProductsContext.Provider value={{state, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )

}
export const useProducts = () => {
    const context = useContext(ProductsContext)
    return context
}
