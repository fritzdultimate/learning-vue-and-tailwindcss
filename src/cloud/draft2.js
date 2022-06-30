const TATU_ENDPOINT = 'https://api-eu1.tatum.io/v3'
const TATU_TESTNET='6873e50f-a592-4b68-b65c-f24ab54c1c9c';
const TATU_MAINNET='5c00f0e9-77aa-4fb6-b5b0-1c414d5ae5f6';

Moralis.Cloud.define("linkAddresss", async (request) => {
    // await Moralis.start( { serverUrl : 'https://zqqlc9enecak.usemoralis.com:2053/server', appId : '71OxWlUqGzRnbphLQRhv8UEWzYlC6WalG7C3e5Fp', masterKey : 'Q0gw9it8d1lGmtpUAl9fstNMPitOMZKtw5qPE9ro' } );
    const results = await Moralis.Cloud.run(
    'watchEthAddress',
    {
      address: "0xbfc95c6471fd1c717abfac578ecff70fc14783a5",
      syncHistorical: false,
    },
    { useMasterKey: true });
});


Moralis.Cloud.define("cryptoBalancee", async(request) => {
    const logger = Moralis.Cloud.getLogger();
    const userId = request.params.id;
    const userWalletsQuery = new Moralis.Query("UserWallets");
    const usersQuery = new Moralis.Query(new Moralis.User());
    const adminWalletsQuery = new Moralis.Query("AdminWallets");

    usersQuery.equalTo('objectId', userId);

    let userWallets = await userWalletsQuery.equalTo('user',  {
        __type : 'Pointer',
        className : '_User',
        objectId : userId
    }).find({ useMasterKey: true });
            
    let totalCryptoBalance = 0;
    let cryptoSymbols = ['m'];
    // for(let i = 0; i < userWallets.length; i++){
   
     logger.info((userWallets));

    let __wait = async () => await new Promise ( resolve => { 
         let idx = 0;
        const interval = setInterval( () => {
        let wallet = userWallets[idx];
        
        // let adminWallets = await adminWalletsQuery.equalTo('objectId',  wallet.attributes.adminWallet.id).find({ useMasterKey: true });
        // adminWallets = adminWallets[0];
        cryptoSymbols.push('userWallets[idx]');
       
        logger.info(idx);
        //  let balance = "";

        // Moralis.Cloud.httpRequest({
        //     url : `${TATUM_ENDPOINT}/${adminWallets.attributes.currency}/address/balance/${wallet.attributes.currencyAddress}`,
        //     headers: {
        //         'x-api-key': TATUM_TESTNET
        //         }
        //     })
        // .then((response) => {
            if ((userWallets.length - 1) == idx) {
                    clearInterval(interval);
                    resolve(cryptoSymbols)
                }
            idx++;
            // let result = await response.data();
            // totalCryptoBalance += (result.incoming - result.outgoing);
        //     logger.info(response.text);
        // },(response) => {
        // // error
        // logger.error('Request failed with response code ' + response.status);
        // });

        
        // totalCryptoBalance += balance;
        // return wallet;
        // logger.info(adminWallets.attributes.currencySymbol);
    // }
    
     }, 1000)
    });
    logger.info(__wait);
    return __wait;





})