import { createContext, useContext, useState } from 'react';
import { newVoteContextType, newVoteDefaultValues, Props, voteInfoType } from './types';

const NewVoteContext = createContext<newVoteContextType>(newVoteDefaultValues);

export function useNewVote() {
    return useContext(NewVoteContext);
}

export function NewVoteProvider({ children }: Props) {
    const [voteInfo, setVoteInfo] = useState<voteInfoType>({
        voteName: '0',
        enableMaxVoter: false,
        maxVoter: 0,
        startDate: '',
        endDate: '',
        voteImage: ''
    });

    const setVote = (voteInformation: voteInfoType) => {
        setVoteInfo(voteInformation);
    };

    const value = {
        voteInfo,
        setVote
    };

    return (
        <>
            <NewVoteContext.Provider value={value}>
                {children}
            </NewVoteContext.Provider>
        </>
    );
}
