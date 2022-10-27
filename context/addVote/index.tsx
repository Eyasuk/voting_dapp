import { createContext, useContext, useState } from 'react';
import { addVoteContextType, addVoteDefaultValues, Props } from './types';

const AddVoteContext = createContext<addVoteContextType>(addVoteDefaultValues);

export function useAddVote() {
    return useContext(AddVoteContext);
}

export function AddVoteProvider({ children }: Props) {
    const [step, setStep] = useState<number>(0);

    const backStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const initialStep = () => {
        setStep(0);
    };

    const value = {
        step,
        backStep,
        nextStep,
        initialStep
    };

    return (
        <>
            <AddVoteContext.Provider value={value}>
                {children}
            </AddVoteContext.Provider>
        </>

    );
}