<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center">
        <div class="wf-bg-white wf-shadow-lg wf-min-h-1/3 md:wf-w-1/3 wf-rounded-md  wf-p-4 md:wf-m-0 wf-m-4">
            <div class="wf-flex">
                <UserAddIcon
                    class="wf-p-1 wf-bg-green-200 wf-rounded-full wf-text-green-700 wf-text-[5px] wf-h-6 wf-w-6 md:wf-h-8 md:wf-w-8" />
                <div class="wf-text-gray-900 wf-font-bold wf-text-base md:wf-text-lg wf-self-baseline wf-px-3">
                    Register
                </div>
                <router-link to="/auth/login"
                    class="wf-flex wf-ml-auto wf-self-baseline wf-rounded-full wf-p-1 wf-shadow wf-shadow-gray-400">
                    <XIcon class="wf-text-gray-400 wf-h-3 wf-w-3 wf-font-semibold" />
                </router-link>
            </div>
            <p class="wf-my-2 wf-text-gray-700 wf-text-sm md:wf-text-base">
                Become a member -- you'll enjoy exclusive deals, offers, invites and rewards.
            </p>
            <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
            <form @submit.prevent="register">
                <div class="wf-p-2">
                    <label class="wf-block wf-relative">
                        <span
                            class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Username
                        </span>
                        <input type="text" v-model="username"
                            class="wf-peer wf-block wf-w-full wf-pl-12 wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600"
                            placeholder="choose a username">
                        <UserIcon
                            class="peer-focus:wf-text-green-700 wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900" />
                    </label>
                </div>
                <div class="wf-p-2">
                    <label class="wf-block wf-relative">
                        <span
                            class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Email
                        </span>
                        <input type="email" v-model="email"
                            class="wf-peer wf-block wf-w-full wf-pl-12 wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600"
                            placeholder="example@email.com">
                        <MailIcon
                            class="peer-focus:wf-text-green-700 wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900" />
                    </label>
                </div>
                <div class="wf-p-2 wf-pb-0">
                    <label class="wf-block wf-relative">
                        <span
                            class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Create a password
                        </span>
                        <input :type="password_visible ? 'text' : 'password'" invalid
                            placeholder="at least 8 characters" v-model="password"
                            class="wf-invalid wf-peer wf-pl-12 wf-pr-10 wf-mt-1 wf-block wf-w-full wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600">
                        <LockClosedIcon class="wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900 
                        peer-focus:wf-text-green-700 peer-focus:peer-invalid:wf-text-red-700" />
                        <EyeOffIcon v-if="password_visible"
                            class="wf-w-4 wf-h-4 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-right-3 wf-text-gray-500 wf-cursor-pointer"
                            @click.prevent="togglePasswordVisibily(false)" />
                        <EyeIcon v-else
                            class="wf-w-4 wf-h-4 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-right-3 wf-text-gray-500 wf-cursor-pointer"
                            @click.prevent="togglePasswordVisibily(true)" />
                    </label>
                </div>
                <p v-if="password_error"
                    class="wf-block wf-p-2 wf-pt-0 wf-text-center wf-text-xs md:wf-text-sm wf-text-red-500">Password
                    must be at least 8 and not greater than 32 characters and contain uppercase, lowercase and number
                </p>
                <div class="wf-p-2 wf-pt-0 wf-mt-5">
                    <label class="wf-block wf-relative">
                        <span
                            class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Date of birth
                        </span>
                        <input type="date" invalid placeholder="at least 8 characters" v-model="dob"
                            class="wf-invalid wf-peer wf-pl-12 wf-pr-10 wf-mt-1 wf-block wf-w-full wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-text-gray-500 wf-uppercase wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600">
                        <CalendarIcon class="wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900 
                        peer-focus:wf-text-green-700 peer-focus:peer-invalid:wf-text-red-700" />
                    </label>
                </div>
                <p class="wf-px-2 wf-text-gray-400 wf-font-medium wf-text-sm">
                    We want to give you a special treat on your birthday
                </p>
                <div class="wf-p-2 wf-flex wf-mb-5">
                    <input v-model="acceptOurTerms" type="checkbox" class="wf-self-baseline wf-mr-1" id="terms">
                    <label class="wf-self-baseline" for="terms">
                        <span class="wf-block wf-text-sm wf-font-medium wf-text-gray-700">
                            Accept our terms &amp; conditions
                        </span>
                    </label>
                </div>
                <div class="wf-flex">
                    <button
                        class="wf-flex wf-justify-center wf-bg-yellow-600 wf-outline-transparent wf-border-0 wf-text-white wf-w-full wf-p-2 wf-rounded wf-text-sm wf-font-semibold focus:wf-ring focus:wf-ring-yellow-500/75 disabled:wf-opacity-75"
                        :disabled="processRegistration">
                        <RefreshIcon class="wf-animate-spin wf-h-5 wf-w-5 wf-text-gray-100"
                            v-if="processRegistration" />
                        <span class="wf-mx-auto" v-if="!processRegistration">Become a member</span>
                    </button>
                </div>
                <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
                <p class="wf-text-sm wf-text-gray-600 wf-text-center">
                    Already have an account? <a href="#"
                        class="wf-text-yellow-700 wf-font-medium wf-p-1 hover:wf-text-yellow-900">Log in</a>
                </p>
            </form>
        </div>
        <SomethingWentWrong :visible="showModal" @closeModal="showModal = false"
            :heading="'Oh no, something went wrong!'"
            :message="'So sorry, but something unexpectedly went wrong, please try again. If it persists, please submit a ticket to our team stating what you were doing or trying to do before the error start so we can help resolve the problem. You first.'"
            :image="'../../../../src/assets/img/illustration/3081783.jpg'" />
        <AccountSetUpModal :visible="showWalletModal" @closeModal="showModal = false" :heading="walletHeading"
            :message="walletMessage" />
    </main>
</template>

<script setup lang="ts">
    import { UserAddIcon, LockClosedIcon, XIcon, MailIcon, EyeIcon, EyeOffIcon, CalendarIcon, RefreshIcon, UserIcon } from '@heroicons/vue/solid';
    import { ref, onMounted, watch } from 'vue';
    import { useRegister } from '@/composables/register.js';
    import router from '@/router';
    import SomethingWentWrong from '../../../../common/components/Cards/SomethingWentWrong.vue';
    import AccountSetUpModal from '@/common/components/Cards/AccountSetUpModal.vue';

import { generateWalletDetails } from '@/composables/generateWalletDetails.js'
    
    
    // const bip39 = require('bip39')

    // console.log(bip39);

    defineEmits(['closeModal'])

    const showModal = ref(false);
    const showWalletModal = ref(false);
    const walletMessage = ref('loading...');
    const walletHeading = ref('Please wait while we set up your account');
    const password_visible = ref(false);
    const username = ref('');
    const password = ref('');
    const email = ref('');
    const dob = ref('');
    const acceptOurTerms = ref(false)
    const password_error = ref(false);
    const password_error_msg = ref('Password must be at least 8 and not greater than 32 characters and contain uppercase, lowercase and number');
    const processRegistration = ref(false);


    const AdminWallets = Moralis.Object.extend("AdminWallets");
    const query = new Moralis.Query(AdminWallets);
    
    // showModal.value = true;

    function togglePasswordVisibily(visibility: boolean) {
        password_visible.value = visibility;
    }

    function passwordStrength(password) {
        let value = 0;
        if(!password.length) {
            return 0;
        } else {
            let digit = /\d/;
            let special = /\W/;
            let capital = /[A-Z]/;
            let small = /[a-z]/;
            value = password.match( digit ) ? value + 20 : value;
            value = password.match( special ) ? value + 20 : value;
            value = password.match( capital ) ? value + 20 : value;
            value = password.match( small ) ? value + 20 : value;
            value = password.length <= 32 && password.length >= 8 ? value + 20 : value;

            return value;
        }
    }

    watch(password, (value) => {
        password_error.value = passwordStrength(value) < 100 ? true : false;
    })

   
    async function register() {
        processRegistration.value = true;
        try {
            let user = await useRegister(username.value, email.value, password.value, dob.value);
            console.log(user);
            processRegistration.value = false;

            console.log('results');
            let adminWallets = await query.find();
            showWalletModal.value = true;
            const currentUser = Moralis.User.current();
            adminWallets.forEach(async (adminWallet, idx) => {
                if (adminWallet.attributes.isActive){
                    const currency = adminWallet.attributes.currency;
                    const UserWallets = Moralis.Object.extend("UserWallets");
                    const userWallets = new UserWallets();
                    walletMessage.value = (" creating " + currency.toUpperCase() + " wallet");
                    //    console.log(currency);
                    let details = await generateWalletDetails(currency);
                    console.log(details);
                    userWallets.set('adminWallet', adminWallet);
                    userWallets.set('user', currentUser);
                    userWallets.set('currencyAddress', details.walletAddress);
                    userWallets.set('mnemonic', details.mnemonic);
                    userWallets.set('xpub', details.xpub);
                    userWallets.set('privateKey', details.privateKey);

                    userWallets.save().then((userwallets) => {
                        console.log(results.length);
                        console.log(idx);
                        // walletMessage.value = (currency.attributes.currency + " created successfully");
                        if((results.length - 1) == idx){
                            router.go({ name: "UserDashboardView" });
                        }
                    });
                }
            });            // 

        } catch(e){
            processRegistration.value = false;
            alert(e.message);
        }
    }

    onMounted(() => {
        // 
    })
</script>