require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess gloom symptom spot warrior ridge remain modify hover knife success giggle'; 
let testAccounts = [
"0xc9bdb3dfd64bf2e9a7276bf8b2165f0db98ffca2ff94239b0279f3874026bf73",
"0xfcd51246598fafede5f8e7ac8fcdede6c6b4509a6856cbeca2e90ccc245e9205",
"0x0450efd3875fd673ab0ad6879752e0c9bae1c9d54eda41a84e7643731a7c4b33",
"0x07c1e7cdca418a4ed468f595aa49648a2601f33d7f891d8462db69cf87e87b2b",
"0x6802edb47a15c6691567eb85b053727284490fdefe1a45d43b91d930a3ba2caf",
"0x6cc2249065fc89b292f2f6e3d7b4427e93e2fffc5b24da0f780f47aff48f126a",
"0xfe0a43407200e78d2827812ad43ede64ad3127cf400c83f4f135c2a2b602c57d",
"0x0808e5ed519cb5efe12bed1ee0b0d906159c76046819ffdfa931dc6b4cb2c0f3",
"0x32b7f1705601be8441e291e106206b29f0a4b7bfde094db18d9b8911da398ddc",
"0xa5655c70aa65b4d109ad099d44ff320e6a30891609171db674f7c6407717a9d5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


