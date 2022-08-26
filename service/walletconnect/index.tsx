import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
const injected = new InjectedConnector({
    supportedChainIds: [1, 2, 3, 4, 5, 6],
});
// const resetWalletConnector = (connector: AbstractConnector): void => {
//     if (connector && connector instanceof WalletConnectConnector) {
//         connector.walletConnectProvider = undefined;
//     }
// };
declare global {
    interface Window {
        ethereum: any;
    }
};

export async function useConnectWallet(): Promise<boolean> {
    const { activate, active, } = useWeb3React();
    const connector = injected;
    await activate(
        connector,
        (err) => {
            console.log(err);
            return false;
        }
    );
    return true;
}
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