import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { Wallets, Networks, NetworkDetail } from 'service/walletconnect/types';

const resetWalletConnector = (connector: AbstractConnector): void => {
    if (connector && connector instanceof WalletConnectConnector) {
        connector.walletConnectProvider = undefined;
    }
};

declare global {
    interface Window {
        ethereum: any;
    }
};


export function useDisconnectWallet(): void {
    const { activate, active, deactivate } = useWeb3React();
    deactivate();

}

export async function useChangeNetwork(): Promise<boolean> {
    const { chainId } = useWeb3React();
    if (window.ethereum && window.ethereum.networkVersion != chainId) {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    // ...network,
                },
            ],
        });
    }
    return true;
};