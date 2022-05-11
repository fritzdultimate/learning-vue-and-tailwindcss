<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center ">
        <div class="wf-bg-white wf-shadow-lg wf-min-h-1/3 md:wf-w-1/3 wf-rounded-md  wf-p-4 md:wf-m-0 wf-m-4">
            <div class="wf-flex">
                <UserCircleIcon class="wf-p-1 wf-bg-green-200 wf-rounded-full wf-text-green-700 wf-text-[5px] wf-h-6 wf-w-6 md:wf-h-8 md:wf-w-8" />
                <div class="wf-text-gray-900 wf-font-bold wf-text-base md:wf-text-lg wf-self-baseline wf-px-3">
                    Accounts
                </div>
                <div class="wf-flex wf-ml-auto wf-self-baseline wf-rounded-full wf-p-1 wf-shadow wf-shadow-gray-400">
                    <XIcon class="wf-text-gray-400 wf-h-3 wf-w-3 wf-font-semibold" />
                </div>
            </div>
            <p class="wf-my-2 wf-text-gray-700 wf-text-sm md:wf-text-base">
                If you have more than one account, you can add them and easily switch between.
            </p>
            <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
            <ul role="list" class="wf-divide-y wf-divide-slate-200 wf-border wf-border-gray-200 wf-rounded">
                <li v-for="(user, index) in users" :key="index" class="wf-z-10 wf-flex wf-py-2 wf-px-3 wf-px wf-mx-0">
                    <img class="wf-object-cover wf-z-10 wf-h-8 wf-w-8 wf-rounded-full wf-relative after:wf-absolute after:wf-content-[''] after:wf-text-lg after:wf-text-green-700 after:-wf-right-1 after:wf-bottom-0 after:wf-z-20 after:wf-bg-green-700 after:wf-rounded-full after:wf-h-2 after:wf-w-2 after:wf-border wf-border-white" :src="`${user.imagSrc}`" alt="" />
                    <div class="wf-ml-3 wf-overflow-hidden">
                        <p class="wf-text-sm wf-font-medium wf-text-gray-700">
                            {{ user.name }}
                        </p>
                        <p class="wf-text-slate-400 wf-truncate wf-text-xs">
                            @{{ user.username }}
                        </p>
                    </div>
                    <CheckCircleIcon v-if="user.active" class="wf-text-blue-500 wf-h-6 wf-w-6 wf-font-extrabold wf-ml-auto wf-self-center" />
                </li>
                <li class="wf-flex wf-py-2 wf-px-3 wf-mx-0 wf-justify-start">
                    <PlusCircleIcon class="wf-text-gray-500 wf-h-6 wf-w-6 wf-font-semibold wf-self-center" />
                    <div class="wf-ml-3 wf-overflow-hidden wf-self-center">
                        <p class="wf-text-sm wf-font-medium wf-text-gray-500">
                            Add an Existing Account
                        </p>
                    </div>
                </li>
            </ul>
            <p class="wf-text-xs wf-font-medium wf-text-gray-400 wf-p-2">
                You can add up to 5 accounts. <a href="#" class="wf-text-yellow-700 wf-font-medium wf-p-1 hover:wf-text-yellow-900">Learn more</a>
            </p>
            <div class="wf-flex wf-py-2 wf-px-3 wf-mx-0 wf-mt-4 wf-border wf-border-gray-200 wf-rounded">
                <LogoutIcon class="wf-text-gray-500 wf-h-6 wf-w-6 wf-font-semibold wf-self-center" />
                <div class="wf-ml-3 wf-overflow-hidden wf-self-center">
                    <p class="wf-text-sm wf-font-medium wf-text-gray-500">
                        Log Out @fritzdultimate
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { UserCircleIcon, XIcon } from '@heroicons/vue/solid';
    import { PlusCircleIcon, LogoutIcon, CheckCircleIcon } from '@heroicons/vue/outline';
    import { ref, onMounted } from 'vue';

    const users = [
        {
            name: 'Nwosu Darlington',
            username: 'fritzdultimate',
            imagSrc: '../../../src/assets/img/fritz_1.jpg',
            active: true
        },
        {
            name: 'Okoye Judith',
            username: 'judith_001',
            imagSrc: '../../../src/assets/img/judith.jpg'
        },
        {
            name: 'Nwosu Nkemjika',
            username: 'cisco',
            imagSrc: '../../../src/assets/img/seth_1.jpg'
        },

        {
            name: 'Richard Chinedu',
            username: 'nobledsmarts',
            imagSrc: '../../../src/assets/img/fritz_2.jpeg'
        },
    ]
</script>