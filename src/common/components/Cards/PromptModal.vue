<template>
    <div class="wf-flex wf-items-center wf-absolute wf-top-0 wf-right-0 wf-left-0 wf-bottom-0 wf-bg-gray-100/40 wf-z-0">
        <div class="wf-flex wf-flex-col wf-items-center wf-justify-center wf-bg-white wf-shadow-lg md:wf-w-1/3 wf-rounded-md md:wf-m-0 wf-m-4 wf-w-full wf-z-10 wf-relative">
            <div class="wf-flex wf-flex-col wf-items-center wf-justify-center wf-p-4">
                <h3 class="wf-text-gray-900 wf-text-xl wf-font-bold wf-mb-4">
                    Enable 2FA
                </h3>
                <p class="wf-text-sm wf-text-gray-600 wf-font-medium wf-mb-3">
                    Enter your password to confirm that you want to enable two-factor authentication.
                </p>

                <div class="wf-w-full wf-border-b-[1.5px] wf-border-b-gray-600 wf-mb-2">
                    <input type="text" class="wf-appearance-none wf-bg-transparent wf-outline-none wf-text-gray-700 wf-text-base wf-font-medium focus:wf-border-b focus:wf-border-gray-500 wf-w-full">
                </div>
            </div>
            <div class="wf-bg-white/50 wf-w-full wf-border-t wf-border-t-gray-400 wf-flex wf-px-5">
                <div class="wf-w-1/2 wf-border-r wf-border-r-gray-400 wf-flex wf-justify-center">
                    <button class="wf-py-3 wf-text-gray-600 wf-font-medium wf-text-base">
                        Cancel
                    </button>
                </div>
                <div class="wf-flex wf-justify-center wf-w-1/2">
                    <button class="wf-py-3 wf-text-base wf-text-yellow-500 wf-font-bold">
                        Yes, enable
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>