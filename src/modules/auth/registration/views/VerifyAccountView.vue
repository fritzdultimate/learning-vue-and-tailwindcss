<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center ">
        <div class="wf-bg-white wf-shadow-lg wf-min-h-1/3 md:wf-w-1/3 wf-rounded-md  wf-p-4 md:wf-m-0 wf-m-4">
            <div class="wf-flex">
                <LockClosedIcon class="wf-p-1 wf-bg-green-200 wf-rounded-full wf-text-green-700 wf-text-[5px] wf-h-6 wf-w-6 md:wf-h-8 md:wf-w-8" />
                <div class="wf-text-gray-900 wf-font-bold wf-text-base md:wf-text-lg wf-self-baseline wf-px-3">
                    Verify Account
                </div>
                <div class="wf-flex wf-ml-auto wf-self-baseline wf-rounded-full wf-p-1 wf-shadow wf-shadow-gray-400">
                    <XIcon class="wf-text-gray-400 wf-h-3 wf-w-3 wf-font-semibold" />
                </div>
            </div>
            <p class="wf-my-2 wf-text-gray-700 wf-text-sm md:wf-text-base">
               Verifying your account proves you're at least reliable.
            </p>
            <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
            <form>
                <div class="wf-p-2">
                    <label class="wf-block wf-relative">
                        <span class="wf-block wf-text-sm wf-font-medium wf-text-slate-700 after:wf-absolute after:wf-content-['*'] after:wf-text-red-500 after:wf-p-px">
                            Code
                        </span>
                        <input type="text" required placeholder="Enter code" v-model="code" class="wf-invalid wf-peer wf-pl-12 wf-pr-10 wf-mt-1 wf-block wf-w-full wf-px-3 wf-py-2 wf-bg-white wf-border wf-border-slate-300 wf-rounded-md wf-text-sm wf-shadow-sm wf-placeholder-slate-400 wf-text-slate-700 wf-font-semibold focus:wf-ring wf-outline-transparent focus:wf-ring-blue-400 focus:invalid:wf-ring-pink-500 invalid:wf-text-600">
                        <ClipboardIcon class="wf-pointer-events-none wf-w-6 wf-h-6 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-left-3 wf-text-gray-900 
                        peer-focus:wf-text-green-700 peer-focus:peer-invalid:wf-text-red-700" />
                        <span class="wf-w-4 wf-h-4 wf-absolute wf-top-2/3 wf-transform -wf-translate-y-1/2 wf-right-10 wf-cursor-pointer wf-text-yellow-700 hover:wf-text-yellow-900">
                            <a href="#" @click.prevent="" class="">resend</a>
                        </span>
                    </label>
                </div>
                <p class="wf-p-2 wf-pt-0 wf-text-xs md:wf-text-sm wf-text-red-600 wf-text-center wf-font-semibold">
                    Code has expired or does not exist.
                </p>
                <div class="wf-p-2 wf-flex">
                    <button class="wf-bg-yellow-600 wf-outline-transparent wf-border-0 wf-text-white wf-w-full wf-p-2 wf-rounded wf-text-sm  wf-font-semibold focus:wf-ring focus:wf-ring-yellow-500/75">
                        Verify
                    </button>
                </div>
                <div class="wf-border-gray-200/75 wf-border-[.01px] wf-my-4"></div>
                <p class="wf-text-sm wf-text-gray-600 wf-text-center">
                    Visited this page by mistake? <a href="#" class="wf-text-yellow-700 wf-font-medium wf-p-1 hover:wf-text-yellow-900">Log in</a>
                </p>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { ClipboardIcon, XIcon, LockClosedIcon } from '@heroicons/vue/solid';
    import { ref, computed } from 'vue';

    const code = ref('');
</script>