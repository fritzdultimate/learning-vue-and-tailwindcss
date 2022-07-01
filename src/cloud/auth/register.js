Moralis.Cloud.define('createTatumAccountFromWallet', async (request) => {
    const resp = await fetch(
        `https://api-eu1.tatum.io/v3/ledger/account`,
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'YOUR_API_KEY_HERE'
            },
            body: JSON.stringify({
            currency: 'BTC',
            xpub: 'xpub6EsCk1uU6cJzqvP9CdsTiJwT2rF748YkPnhv5Qo8q44DG7nn2vbyt48YRsNSUYS44jFCW9gwvD9kLQu9AuqXpTpM1c5hgg9PsuBLdeNncid',
            customer: {
                accountingCurrency: 'USD',
                customerCountry: 'US',
                externalId: '123654',
                providerCountry: 'US'
            },
            compliant: false,
            accountCode: 'AC_1011_B',
            accountingCurrency: 'USD',
            accountNumber: '123456'
            })
        }
);

const data = await resp.json();
console.log(data);
});