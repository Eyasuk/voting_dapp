import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { useWeb3React } from '@web3-react/core';
import Abi from 'abi/abi.json';
import { networks, VoteInfoType } from './types';

export const deployVote = async (chainId: number, voteInfo: VoteInfoType) => {
    let network
    if (chainId == 137)
        network = networks[chainId]
    else if (chainId == 420)
        network = networks[chainId]
    else
        network = networks[5777]
    const web3 = new Web3(network.rpcLink);
    const voteContract = new web3.eth.Contract(Abi as AbiItem[], network.contractAddress);
    try {

        const accounts = await web3.eth.getAccounts();
        console.log(voteInfo)
        const info = await voteContract.methods.addVote(voteInfo.name, 0, voteInfo.startingDate, voteInfo.endingDate, voteInfo.descrption, voteInfo.imageUrl, voteInfo.candidates).send({ from: accounts[0], gas: 1721975 },);

        return { success: true, data: info };
    }
    catch (err) {
        console.log(err)
        return { success: false, data: err };
    }

};

export const getVotes = async (chainId: number) => {
    let network;

    if (chainId == 137)
        network = networks[chainId]
    else if (chainId == 420)
        network = networks[chainId]
    else
        network = networks[5777]
    const web3 = new Web3(network.rpcLink);
    try {
        const voteContract = new web3.eth.Contract(Abi as AbiItem[], network.contractAddress);
        const votes = await voteContract.methods.getVotes().call();
        return { success: true, data: votes };
    }
    catch (err) {
        return { success: false, data: err }
    }
};

export const getVote = async (voteId: any) => {


    const network = networks[5777]
    const web3 = new Web3(network.rpcLink);
    try {
        const voteContract = new web3.eth.Contract(Abi as AbiItem[], network.contractAddress);
        const candidate = await voteContract.methods.getCandidate(voteId).call();
        const voteInfo = await voteContract.methods.getVote(voteId).call();

        return { success: true, data: { candidate: candidate, voteInfo: voteInfo } };
    }
    catch (err) {
        return { success: false, data: err }
    }
};

export const voting = async (voteId: number, candidateId: number) => {

    const network = networks[5777]
    const web3 = new Web3(network.rpcLink);
    const accounts = await web3.eth.getAccounts();
    try {
        const voteContract = new web3.eth.Contract(Abi as AbiItem[], network.contractAddress);
        const response = await voteContract.methods.voting(candidateId, voteId).send({ from: accounts[3], gas: 1721975 },);
        return { success: true, data: response };
    }
    catch (err) {
        return { success: false, data: err }
    }
}



