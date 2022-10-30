import { createContext, useContext, useState } from 'react';
import { PagesStatusContextType, PagesStatusDefaultValues, Props } from './types';

const PagesStatusContext = createContext<PagesStatusContextType>(PagesStatusDefaultValues);

export function usePageStatus() {
    return useContext(PagesStatusContext);
}

export function PagesStatusProvider({ children }: Props) {
    const [loading, setLoading] = useState<boolean>(false);

    const isLoading = (value: boolean) => {
        setLoading(value);

    };



    const value = {
        loading,
        isLoading
    };

    return (
        <>
            <PagesStatusContext.Provider value={value}>
                {children}
            </PagesStatusContext.Provider>
        </>

    );
}

