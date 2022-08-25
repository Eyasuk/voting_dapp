export enum WalletLists {
    MetaMask,
    WalletConnect
};

export enum Network {
    Ethereum = 'Ethereum',
    Ropsten = 'Ropsten',
    LocalHost = 'LocalHost',
};

export const SupportedNetwork = {
    Ethereum: { chainId: 1, rpcLink: 'https://mainnet.infura.io/v3/' },
    Ropsten: { chainId: 3, rpcLink: 'https://ropsten.infura.io/v3/' },
    LocalHost: { chainId: 5777, rpcLink: 'HTTP://127.0.0.1:7545' },

};
