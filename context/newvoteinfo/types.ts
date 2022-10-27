import { ReactNode } from "react";

export type newVoteContextType = {
    voteInfo: voteInfoType;
    setVote: (voteInformation: voteInfoType) => void;
};

export type voteInfoType = {
    voteName: string;
    enableMaxVoter: boolean;
    maxVoter: number;
    startDate: string;
    endDate: string;
    voteImage: string;
}

export type Props = {
    children: ReactNode;
};

export const newVoteDefaultValues: newVoteContextType = {
    voteInfo: {
        voteName: '',
        enableMaxVoter: false,
        maxVoter: 0,
        startDate: '',
        endDate: '',
        voteImage: ''
    },
    setVote: (v: voteInfoType) => { },
};

