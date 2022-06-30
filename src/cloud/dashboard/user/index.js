const TATUM_ENDPOINT = 'https://api-eu1.tatum.io/v3'
const TATUM_TESTNET='6873e50f-a592-4b68-b65c-f24ab54c1c9c';
const TATUM_MAINNET='5c00f0e9-77aa-4fb6-b5b0-1c414d5ae5f6';

Moralis.Cloud.define("linkAddress", async (request) => {
    // await Moralis.start( { serverUrl : 'https://zqqlc9enecak.usemoralis.com:2053/server', appId : '71OxWlUqGzRnbphLQRhv8UEWzYlC6WalG7C3e5Fp', masterKey : 'Q0gw9it8d1lGmtpUAl9fstNMPitOMZKtw5qPE9ro' } );
    const results = await Moralis.Cloud.run(
    'watchEthAddress',
    {
      address: "0xbfc95c6471fd1c717abfac578ecff70fc14783a5",
      syncHistorical: false,
    },
    { useMasterKey: true });
});

Moralis.Cloud.define('getUsdRate', async (request) => {
    const { currencySymbol } = request.params;
    return Moralis.Cloud.httpRequest({
        url: `https://min-api.cryptocompare.com/data/price?fsym=btc&tsyms=${currencySymbol}`,
    }).then((httpResponse) => httpResponse.data[currencySymbol.toUpperCase()]);
});

Moralis.Cloud.define('getBalance', async (request) => {
    const { currency, currencyAddress } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `${TATUM_ENDPOINT}/${currency}/address/balance/${currencyAddress}`,
        headers: {
            'x-api-key': TATUM_TESTNET
        }
    }).then((response) => {
        const { data } = response;
        let balance = (data.incoming - data.outgoing);
        return balance;
    }, (response) => {
        return 0;
    });
});

Moralis.Cloud.define('cloudCryptoBalance', async(request) => {
    const { userId } = request.params;

    const userWalletsQuery = new Moralis.Query("UserWallets");
    let userWallets = await userWalletsQuery.equalTo('user',  {
        __type : 'Pointer',
        className : '_User',
        objectId : userId
    }).find({ useMasterKey: true });

    const adminWalletsQuery = new Moralis.Query("AdminWallets");

    return new Promise(async (resolve) => {
        let idx = 0;
        let totalBalance = 0;
        let interval = setInterval(async () => {
            if((userWallets.length - 1) == idx){
                clearInterval(interval);
                resolve(totalBalance);
            } else {
                let wallet = userWallets[idx];
                let adminWallets = await adminWalletsQuery.equalTo('objectId',  wallet.attributes.adminWallet.id).find({ useMasterKey: true });
                adminWallets = adminWallets[0];
                const currencySymbol =  adminWallets.attributes.currencySymbol;

                const balance = await Moralis.Cloud.run('getBalance', {
                    currency : adminWallets.attributes.currency,
                    currencyAddress : wallet.attributes.currencyAddress
                });

                const usdRate = await Moralis.Cloud.run('getUsdRate', {
                    currencySymbol
                });
                totalBalance += balance * usdRate;

                idx++;
            }
        }, 1000);
    });
});

Moralis.Cloud.define("cryptoBalance", async(request) => {
    const cryptoBalance = await Moralis.Cloud.run('cloudCryptoBalance', {
         userId : request.user.id 
    });
     return cryptoBalance;
})