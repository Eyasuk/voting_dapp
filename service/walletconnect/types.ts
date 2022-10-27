export enum Wallets {
    MetaMask,
    WalletConnect
};

export enum Networks {
    Polygon = 'Polygon',
    Goerli = 'Goerli',
    LocalHost = 'LocalHost',
};

export const NetworkDetail = {
    Polygon: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com']
    },
    Goerli: {
        chainId: `0x${Number(420).toString(16)}`,
        chainName: "Optimism Goerli Testnet",
        nativeCurrency: {
            name: "Görli Ether",
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli.optimism.io/'],

    },
    LocalHost: {
        chainId: `0x${Number(5777).toString(16)}`,
        chainName: 'localhost',
        nativeCurrency: {
            name: 'Localhost',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['HTTP://127.0.0.1:7545'],

    },

};



