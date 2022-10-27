import { ReactNode } from "react";

export type addCandidateContextType = {
    candidates: candidateType[];
    addCandidate: (candidate: candidateType) => void;
    removeCandidate: (index: number) => void;
    editCandidate: (index: number, candidateInfo: candidateType) => void;
};

export type Props = {
    children: ReactNode;
};

export type candidateType = [
    name: string,
    description: string,
    candidateImage: string,
    voteCount: number,
]

export const addCandidateDefaultValues: addCandidateContextType = {
    candidates: [],
    addCandidate: (candidate: candidateType) => { },
    removeCandidate: (index: number) => { },
    editCandidate: (index: number) => { }
};