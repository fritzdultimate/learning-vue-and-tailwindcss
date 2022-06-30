    // // create query
    // const query = new Moralis.Query("EthTransactions");
    // query.equalTo("to_address", binanceWallet);
    // Moralis.Cloud.httpRequest({ url : `https://min-api.cryptocompare.com/data/price?fsym=${currency.value}&tsyms=${coin.value}`})
    // .then(function(httpResponse) {
    // // success
    // logger.info(httpResponse.text);
    // },function(httpResponse) {
    // // error
    // logger.error('Request failed with response code ' + httpResponse.status);
    // });
    // let response = await fetch(`);
    // let response_value = await response.json();
    // return response_value[coin.value.toUpperCase()];






    // let cryptoSymbols =  userWallets.map(async (wallet) => {
        // const balance = await Moralis.Web3API.account.getNativeBalance({
        //     address : wallet.attributes.currencyAddress
        // });

        // let adminWallets = await adminWalletsQuery.equalTo('objectId',  wallet.attributes.id).find({ useMasterKey: true });
        // cryptoSymbols.push('testing');
        // totalCryptoBalance += balance;
        // return wallet;
        // logger.info(adminWallets.attributes.currencySymbol);
    // });
    // logger.info(totalCryptoBalance);
    // logger.info(res);