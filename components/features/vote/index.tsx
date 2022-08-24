import NextImage from 'next/image';
import { AbiItem } from 'web3-utils';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import abi from 'abi/abi.json';

import styles from './vote.module.scss';

export default function Vote(): JSX.Element {
    const [data, setData] = useState();
    useEffect(() => {
        name();
    }, [])

    async function name() {
        var address = '0x49a3273A57bc7bd3e784f2BA3f66cCF2197160ae'
        const web3 = new Web3('http://localhost:7545');
        let contract = new web3.eth.Contract(abi as AbiItem[], '0x96703c839830D1E7da3754F094EAF45d906e497F');
        setData(contract.methods.getVotes().call())
        console.log(await contract.methods.votes(0).call())

        // if (window.ethereum) {
        //     var accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        //     var web3 = new Web3(window.ethereum);
        //     var contract = new web3.eth.Contract(abi, address);
        //     console.log(contract);

        //     const result = await contract.methods.store(456).send({ from: accounts[0] });
        //     console.log(result);

        //     const result2 = await contract.methods.retreive().call();
        //     console.log(result2);
        // }

    }

    return (
        <>
            {data && <div>{data}</div>}
        </>

    );
}