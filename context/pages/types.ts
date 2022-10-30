import { ReactNode } from "react";

export type PagesStatusContextType = {
    loading: boolean,
    isLoading: (value: boolean) => void;
};

export type Props = {
    children: ReactNode;
};



export const PagesStatusDefaultValues: PagesStatusContextType = {
    loading: false,
    isLoading: () => { }
};