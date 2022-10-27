import { ReactNode } from "react";

export type addVoteContextType = {
    step: number;
    backStep: () => void;
    nextStep: () => void;
    initialStep: () => void;
};

export type Props = {
    children: ReactNode;
};

export const addVoteDefaultValues: addVoteContextType = {
    step: 0,
    backStep: () => { },
    nextStep: () => { },
    initialStep: () => { }
};