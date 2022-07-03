const TATUM_ENDPOINT = 'https://api-eu1.tatum.io/v3'
const TATUM_TESTNET='6873e50f-a592-4b68-b65c-f24ab54c1c9c';
const TATUM_MAINNET='5c00f0e9-77aa-4fb6-b5b0-1c414d5ae5f6';

Moralis.Cloud.define("linkAddress", async (request) => {
    const results = await Moralis.Cloud.run(
    'watchEthAddress',
    {
      address: "0xbfc95c6471fd1c717abfac578ecff70fc14783a5",
      syncHistorical: false,
    },
    { useMasterKey: true });
});

Moralis.Cloud.define('getUsdRate', async (request) => {
    const logger = Moralis.Cloud.getLogger();
    const { currencySymbol } = request.params;
    return Moralis.Cloud.httpRequest({
        url: `https://min-api.cryptocompare.com/data/price?fsym=${currencySymbol}&tsyms=usd`,
    }).then((httpResponse) => {
        return httpResponse.data['USD']
    });
});

Moralis.Cloud.define('getBalance', async (request) => {
    const logger = Moralis.Cloud.getLogger();
    const { currency, currencyAddress } = request.params;
    
    return Moralis.Cloud.httpRequest({
        url : `${TATUM_ENDPOINT}/${currency}/address/balance/${currencyAddress}`,
        followRedirects : true,
        headers: {
            'x-api-key': TATUM_MAINNET
        }
    }).then((response) => {
        const { data } = response;
        let balance = (data.incoming - data.outgoing);
        return balance;
    }, (response) => {
        logger.info(response);
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

                // const logger = Moralis.Cloud.getLogger();

                const usdRate2dp = parseFloat(((+usdRate).toFixed(2)));
                totalBalance += balance * usdRate2dp;
                // logger.info(`${balance} * ${usdRate2dp} == ${balance * usdRate2dp}`);

                idx++;
            }
        }, 1000);
    });
});

Moralis.Cloud.define("cryptoBalance", async(request) => {
    const cryptoBalance = await Moralis.Cloud.run('cloudCryptoBalance', {
         userId : request.user.id 
    });
    return parseFloat(((+cryptoBalance).toFixed(2)));
})