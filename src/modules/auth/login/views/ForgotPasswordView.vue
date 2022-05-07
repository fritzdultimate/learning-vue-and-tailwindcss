<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center ">
        <div class="wf-bg-white wf-shadow-lg wf-min-h-1/3 md:wf-w-1/3 wf-rounded-md  wf-p-4 md:wf-m-0 wf-m-4">
            <div class="wf-flex">
                <LockClosedIcon class="wf-p-1 wf-bg-green-200 wf-rounded-full wf-text-green-700 wf-text-[5px] wf-h-6 wf-w-6 md:wf-h-8 md:wf-w-8" />
                <div class="wf-text-gray-900 wf-font-bold wf-text-base md:wf-text-lg wf-self-baseline wf-px-3">
                    Forgot Password
                </div>
                <div class="wf-flex wf-ml-auto wf-self-baseline wf-rounded-full wf-p-1 wf-shadow wf-shadow-gray-400">
                    <XIcon class="wf-text-gray-400 wf-h-3 wf-w-3 wf-font-semibold" />
                </div>
            </div>
            <p class="wf-my-2 wf-text-gray-700 wf-text-sm md:wf-text-base">
                Please enter the email address you used to create your account, and we'll send you a link to reset your password.
            </p>
            <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
            <form>
                <div class="wf-p-2">
                    <label class="wf-block wf-relative">
                        <span class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Email
                        </span>
                         <input type="text" value="tbone" class="wf-peer wf-block wf-w-full wf-pl-12 wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 invalid:wf-border-pink-500 invalid:wf-text-600">
                         <MailIcon class="peer-focus:wf-text-green-700 wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900" />
                    </label>
                </div>
                <div class="wf-p-2 wf-flex">
                    <button class="wf-bg-yellow-600 wf-outline-transparent wf-border-0 wf-text-white wf-w-full wf-p-2 wf-rounded wf-text-sm focus:wf-ring focus:wf-ring-yellow-500/75">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { LockClosedIcon, XIcon, MailIcon } from '@heroicons/vue/solid';
</script>