import React, { FC, createContext, useReducer } from "react";
import reducer from "./Reducer";

interface ChildrenProps {
    children: React.ReactElement
}

interface GlobalContextType {
    getAllData: any;
    dispatch: any;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
const { Provider: GlobalProvider } = GlobalContext;

const Provider: FC<ChildrenProps> = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        data: [],
        error: null,
    };

    const [getAllData, dispatch] = useReducer(reducer, initialState);
    const contextValue: GlobalContextType = {
        getAllData,
        dispatch,
    };
    return (
        <GlobalProvider
            value={contextValue}
        >
            {children}
        </GlobalProvider>
    );
};

export default Provider;