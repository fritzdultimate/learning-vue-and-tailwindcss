<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center ">
        <div class="wf-bg-white wf-shadow-lg wf-min-h-1/3 wf-w-1/3 wf-rounded-md  wf-p-4">
            <div class="wf-flex">
                <LockClosedIcon class="wf-p-1 wf-bg-green-200 wf-rounded-full wf-text-green-700 wf-text-[5px] wf-h-4 wf-w-4 md:wf-h-6 md:wf-w-6" />
                <div class="wf-text-gray-900 wf-font-bold wf-text-base wf-self-baseline wf-px-3">
                    Log in
                </div>
                <div class="wf-flex wf-ml-auto wf-self-baseline wf-rounded-full wf-p-1 wf-shadow wf-shadow-gray-400">
                    <XIcon class="wf-text-gray-400 wf-h-3 wf-w-3 wf-font-semibold" />
                </div>
            </div>
            <p class="wf-my-2 wf-text-gray-700">
                Become a member -- you'll enjoy exclusive deals, offers, invites and rewards.
            </p>
            <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { LockClosedIcon, XIcon } from '@heroicons/vue/solid';
</script>