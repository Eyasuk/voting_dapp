export const networks = {
    137: { rpcLink: 'https://polygon-rpc.com/', contractAddress: '' },
    420: { rpcLink: 'https://goerli.optimism.io/', contractAddress: '' },
    5777: { rpcLink: 'HTTP://127.0.0.1:7545', contractAddress: '0x022082039E8f7436171c5Aba4d22e0aA1d67C711' }
}
export type VoteInfoType = {
    name: string,
    noOfCandidate: number,
    startingDate: number,
    endingDate: number,
    descrption: string;
    imageUrl: string
    candidates: CandidateType[]
}

type CandidateType = [
    name: string,
    descrpition: string,
    candidateImage: string,
    voteCount: number,
];