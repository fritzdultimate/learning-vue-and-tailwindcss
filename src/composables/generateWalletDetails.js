
const ENDPOINT = 'https://api-eu1.tatum.io/v3'

const apiKey =  import.meta.env.VITE_MAINNET;
const apiHeader = {
    header : {
        'x-api-key':apiKey
    }
}

const requestObject = {
    method: 'GET',
    ...apiHeader
}


export async function generateWalletDetails(currency){
    let mnemonicData = await generateMnemonic(currency);
    const { mnemonic, xpub } = mnemonicData;
    let walletAddress = await generateWalletAddress(currency, xpub);
    let privateKey = await generatePrivateKey(currency, mnemonic);

    return { mnemonic, xpub, walletAddress, privateKey };
}
async function generateWalletAddress(currency, xpub, index = 0){
    const response = await fetch(`${ENDPOINT}/${currency}/address/${xpub}/${index}`,requestObject);
    const data = await response.json();
    return data.address;
}

async function generateMnemonic(currency){
    const response = await fetch(`${ENDPOINT}/${currency}/wallet`, requestObject);
    const data = await response.json();
    return data;
}
async function generatePrivateKey(currency, mnemonic){
    const response = await fetch(`${ENDPOINT}/${currency}/wallet/priv`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key':apiKey
        },
        body: JSON.stringify({
            index: 0,
            mnemonic
        })    
    });
    const data = await response.json();
    return data.key;
}
 