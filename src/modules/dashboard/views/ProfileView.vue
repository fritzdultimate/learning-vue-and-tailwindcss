<template>
    <div class="wf-relative">
        <ViewWrapper>
            <div class="wf-flex wf-justify-center wf-pb-3 wf-border-b wf-border-b-gray-300 wf-font-bold wf-text-xl wf-text-gray-700">Profile</div>

            <div class="wf-flex wf-py-4 wf-px-4 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75">
                <figure class="wf-flex-shrink-0">
                    <!-- <img> -->
                    <div class="wf-w-8 wf-h-8 wf-rounded-full wf-bg-yellow-300"></div>
                </figure>
                <div class="wf-flex wf-flex-col wf-ml-4">
                    <span class="wf-text-gray-600 wf-text-xs wf-font-medium">
                        fritzdultimate@gmail.com
                    </span>
                    <span class="wf-text-gray-900 wf-text-base wf-font-bold">
                        Nwosu Darlington
                    </span>
                </div>
            </div>

            <div class="wf-bg-slate-200 wf-h-full wf-py-4 wf-px-4">
                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        Account
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in accountListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>
                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        Security
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in securityListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>

                <section class="wf-flex wf-flex-col wf-mb-4">
                    <h1 class="wf-text-base wf-font-medium wf-text-gray-700">
                        General
                    </h1>
                    
                    <ul class="wf-mt-5">
                        <li class="wf-flex wf-bg-white wf-rounded wf-py-4 wf-px-2 wf-mt-2.5 first:wf-mt-0 wf-cursor-pointer hover:wf-bg-gray-100 hover:wf-shadow-md wf-transition wf-duration-75" v-for="option in generalListOptions" :key="option.name">
                            <span class="wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow wf-mr-3">
                                <component :is="option.icon" class="wf-w-5 wf-h-5 wf-text-white wf-fill-gray-700" />
                            </span>

                            <span class="wf-text-sm wf-font-medium wf-text-gray-900">
                                {{ option.name }}
                            </span>
                            <span class="wf-ml-auto wf-bg-gray-300 wf-rounded-full wf-p-px wf-shadow">
                                <ChevronRightIcon class="wf-w-5 wf-h-5" />
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </ViewWrapper>
        <div class="wf-fixed wf-w-full wf-h-full wf-bg-black/50 wf-top-0 wf-left-0 wf-z-0">
            <div class="wf-w-full wf-min-h-[320px] wf-bg-white wf-absolute wf-z-10 wf-bottom-0 wf-rounded-t-2xl"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import { onBeforeMount, onMounted } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronRightIcon, CurrencyDollarIcon, FlagIcon, ShieldCheckIcon, BellIcon, LockClosedIcon, KeyIcon, ClockIcon, FingerPrintIcon, EyeIcon, TrashIcon, ChatIcon, DocumentIcon, UserAddIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid';
import { shallowRef } from 'vue';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide());

const accountListOptions = [
    {
        name: "Native currency",
        icon: CurrencyDollarIcon,
        danger: false,
        input: "select",
        message: "Select preferred currency for your account",
        columns: [{
            label: "Currency",
            column: "preferred_currency"
        }],
        button: "Save"
    },
    {
        name: "Country",
        icon: FlagIcon
    },
    {
        name: "Export private key",
        icon: ShieldCheckIcon
    },
    {
        name: "Notifications settings",
        icon: BellIcon
    }
]

const securityListOptions = [
    {
        name: "Change password",
        icon: LockClosedIcon
    },
    {
        name: "Enable 2FA",
        icon: KeyIcon
    },
    {
        name: "Fund proccessing duration",
        icon: ClockIcon
    },
    {
        name: "Transaction pin",
        icon: FingerPrintIcon
    },
    {
        name: "View passphrase",
        icon: EyeIcon
    },
    {
        name: "Delete account",
        icon: TrashIcon
    }
]

const generalListOptions = [
    {
        name: "Support",
        icon: ChatIcon
    },
    {
        name: "Terms of service",
        icon: DocumentIcon
    },
    {
        name: "Invite friends",
        icon: UserAddIcon
    },
    {
        name: "Help center",
        icon: QuestionMarkCircleIcon
    },
    {
        name: "Report issue",
        icon: FlagIcon
    }
]

</script>