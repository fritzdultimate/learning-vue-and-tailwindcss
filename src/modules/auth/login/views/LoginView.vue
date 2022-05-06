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
            <form>
                <div class="">
                    <label class="block">
                        <span class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Email
                        </span>
                    </label>
                    <input type="text" value="tbone" class="wf-mt-1 wf-block wf-w-full wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600">
                </div>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { LockClosedIcon, XIcon } from '@heroicons/vue/solid';
</script>