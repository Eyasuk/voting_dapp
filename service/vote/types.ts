export const networks = {
    137: { rpcLink: 'https://polygon-rpc.com/', contractAddress: '' },
    420: { rpcLink: 'https://goerli.optimism.io/', contractAddress: '' },
    5777: { rpcLink: 'HTTP://127.0.0.1:7545', contractAddress: '0xA69F03cDF6a70F6078F1DD0a3d1A55c6A915872D' }
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