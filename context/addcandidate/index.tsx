import { createContext, useContext, useState } from 'react';
import { addCandidateContextType, addCandidateDefaultValues, Props, candidateType } from './types';
const AddCandidateContext = createContext<addCandidateContextType>(addCandidateDefaultValues);

export function useAddCandidate() {
    return useContext(AddCandidateContext);
}

export function AddCandidateProvider({ children }: Props) {
    const [candidates, setCandidate] = useState<candidateType[]>([]);
    const addCandidate = (candidate: candidateType) => {
        setCandidate([...candidates, candidate]);
    };

    const removeCandidate = (index: number) => {
        if (index > -1) {
            candidates.splice(index, 1);
        }
        setCandidate([...candidates]);
    };

    const editCandidate = (index: number, candidateInfo: candidateType) => {

    };

    const value = {
        candidates,
        addCandidate,
        editCandidate,
        removeCandidate
    };

    return (
        <>
            <AddCandidateContext.Provider value={value}>
                {children}
            </AddCandidateContext.Provider>
        </>

    );
}