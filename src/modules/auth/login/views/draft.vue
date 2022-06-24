<script>
    const resp = await fetch(
                `https://api-eu1.tatum.io/v3/bitcoin/wallet`,
                {
                    method: 'GET',
                    headers: {
                        'x-api-key': import.meta.env.VITE_MAINNET
                    }
                }
            );

            const data = await resp.json();
            console.log(data);
            const { mnemonic } = data;

            const xpub = data.xpub;
            const index = 0;
            const resp1 = await fetch(
                `https://api-eu1.tatum.io/v3/bitcoin/address/${xpub}/${index}`,
                {
                    method: 'GET',
                    headers: {
                        'x-api-key': import.meta.env.VITE_MAINNET
                    }
                }
            );

            const data1 = await resp1.json();
            const { currency_address } = data1;
            console.log(data1);
            // const checkIfLinked = async () => {
                const currentUser = Moralis.User.current();
            //     const accountLinked = currentUser.attributes.accounts.includes(
            //         data.address
            //     );
            //     return accountLinked;
            // };
            console.log(currentUser);

           
            // const mor = await Moralis.link(data.address);
            // console.log(mor);

            const resp2 = await fetch(
                `https://api-eu1.tatum.io/v3/bitcoin/wallet/priv`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': import.meta.env.VITE_MAINNET
                    },
                    body: JSON.stringify({
                        index: 0,
                        mnemonic: data.mnemonic
                    })
                }
            );

            const data2 = await resp2.json();
            console.log(data2);
            const { key } = data2;
            const connectUserWallet = async () => {
                // const isLinked = await checkIfLinked();
                // console.log(isLinked);
                console.log(Moralis.Web3);
                // let web3Provider = await Moralis.enableWeb3({ privateKey: data2.key });
                if (true) {
                    // if (isLinked === true) {
                    //     console.log(isLinked);
                    // await Moralis.enable();
                    // }

                    if (true) {
                        if (
                            window.confirm(
                                "Would you like to link this account to your user profile?"
                            )
                        ) {
                            let link = await Moralis.link(data.address);
                            console.log(link);
                        }
                    }
                }
            };
            connectUserWallet();

</script>