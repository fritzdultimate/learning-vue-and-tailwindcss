import { useGenerateWalletDetails } from '@/composables/generateWalletDetails.js'

export const useSetUpWallets = (progressWidth, walletMessage) => new Promise(async(resolve, reject) => {
    try {

        const AdminWallets = Moralis.Object.extend("AdminWallets");
        const query = new Moralis.Query(AdminWallets);
        let adminWallets = await query.equalTo('isActive', 'true').find();
        const currentUser = Moralis.User.current();
        let currentIdx = 0;

        let interval = setInterval(async () => {
            progressWidth.value = ((currentIdx + 1) / adminWallets.length) * 100;
            walletMessage.value = ("Creating your " + adminWallets[currentIdx].attributes.currency + " wallet");


            const currency = adminWallets[currentIdx].attributes.currency;
            const UserWallets = Moralis.Object.extend("UserWallets");
            const userWallets = new UserWallets();
            let details = await useGenerateWalletDetails(currency);

            userWallets.set('adminWallet', adminWallets[currentIdx]);
            userWallets.set('user', currentUser);
            userWallets.set('currencyAddress', details.walletAddress);
            userWallets.set('mnemonic', details.mnemonic);
            userWallets.set('xpub', details.xpub);
            userWallets.set('privateKey', details.privateKey);

            userWallets.save().then((userwallets) => {
                // walletMessage.value = (currency.attributes.currency + " created successfully");
                if ((adminWallets.length - 1) == currentIdx) {
                    clearInterval(interval);
                    resolve({ success : true });
                }
                currentIdx++;
            });
        }, 1000);
    } catch (err){
        reject({ success : false, err });
    }
});