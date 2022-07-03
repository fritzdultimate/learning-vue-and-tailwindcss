const apiHeader = {
    header : {
        'x-api-key':TATUM_MAINNET,
        // 'mode' : 'no-cors'
    }
}

const requestObject = {
    method: 'GET',
    // 'mode' : 'no-cors',
    ...apiHeader
}

Moralis.Cloud.define('useGenerateWalletDetails', async (request) => {
    const { currency } = request.params;
    let mnemonicData = await Moralis.Cloud.run('generateMnemonic', {currency});
    const { mnemonic, xpub } = mnemonicData;
    let walletAddress = await generateWalletAddress(currency, xpub);
    let privateKey = await generatePrivateKey(currency, mnemonic);

    return { mnemonic, xpub, walletAddress, privateKey };
});

Moralis.Cloud.define('generateWalletAddress', async(request) => {
    const { currency, xpub, index } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `${TATUM_ENDPOINT}/${currency}/address/${xpub}/${index}`,
        requestObject
    }).then((response) => {
        response.data.address
    });
});

Moralis.Cloud.define('generateMnemonic', async (request) => {
    const { currency } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `${TATUM_ENDPOINT}/${currency}/wallet`,
        requestObject
    }).then((response) => {
        return response.data
    });
})

Moralis.Cloud.define('generatePrivateKey', async (request) => {
    const { currency, mnemonic } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `${TATUM_ENDPOINT}/${currency}/wallet/priv`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'mode' : 'no-cors',
            'x-api-key':TATUM_MAINNET
        },
        // 'mode' : 'no-cors',
        body: JSON.stringify({
            index: 0,
            mnemonic
        })  
    }).then((response) => {
        return response.data.key
    })
    // const data = await response.json();
    // return data.key;
});


Moralis.Cloud.define('createTatumAccountFromWallet', async (request) => {
    const { currencySymbol, xpub, userId, accountNumber } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `https://api-eu1.tatum.io/v3/ledger/account`,
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': TATUM_MAINNET
        },
        body: JSON.stringify({
            currency: currencySymbol,
            xpub,
            customer: {
                accountingCurrency: 'USD',
                customerCountry: 'US',
                externalId: userId,
                providerCountry: 'US'
            },
            compliant: false,
            accountCode: 'AC_1011_B',
            accountingCurrency: 'USD',
            accountNumber
        })
    }).then((httpResponse) => {
        return httpResponse.data
    });
});

Moralis.Cloud.define('enableAddressNotification', async (request) => {
    const { address, chain } = request.params;
    return Moralis.Cloud.httpRequest({
        url : `https://api-eu1.tatum.io/v3/subscription`,
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'TATUM_MAINNET'
        },
        body: JSON.stringify({
        type: 'ADDRESS_TRANSACTION',
        attr: {
            address,
            chain,
            url: 'https://webhook.tatum.io/account'
        }
        })
    }).then((httpResponse) => {
        return httpResponse.data
    });
});