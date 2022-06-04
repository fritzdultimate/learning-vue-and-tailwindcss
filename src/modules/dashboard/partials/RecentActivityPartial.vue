<template>
    <div>
        <!-- Header -->
        <div class="wf-flex">
            <span class="wf-text-xl wf-font-bold wf-font-san">
                Recent activity
            </span>
            <span class="wf-ml-auto wf-mb-2">
            <router-link to="#" class="wf-mr-2 wf-text-sm wf-font-medium wf-text-gray-500">
                See all
            </router-link>
        </span>
        </div>
        <!-- Activities -->
        <div class="wf-flex wf-flex-col wf-mt-5">
            <div class="wf-flex wf-justify-between wf-mb-5">
                <div class="wf-flex">
                    <figure class="wf-p-1 wf-rounded-full wf-bg-gray-100 wf-shadow wf-flex wf-justify-center wf-items-center wf-mr-5">
                        <img src="../../../../src/assets/img/fritz_1.jpg" class="wf-cover wf-w-9 wf-h-9 wf-rounded-full">
                    </figure>
                    <p class="wf-flex wf-flex-col">
                        <span class="wf-text-base wf-font-bold wf-text-gray-900">
                            Ethereum deposit
                        </span>
                        <span class="wf-text-sm wf-font-medium wf-text-gray-500">
                            08 Jan, 2022
                        </span>
                    </p>
                </div>
                <span class="wf-text-base wf-font-bold wf-text-gray-900">
                    $899.0
                </span>
            </div>
            <div class="wf-flex wf-justify-between wf-mb-5">
                <div class="wf-flex">
                    <figure class="wf-p-1 wf-rounded-full wf-bg-gray-100 wf-shadow wf-flex wf-justify-center wf-items-center wf-mr-5">
                        <img src="../../../../src/assets/img/fritz_1.jpg" class="wf-cover wf-w-9 wf-h-9 wf-rounded-full">
                    </figure>
                    <p class="wf-flex wf-flex-col">
                        <span class="wf-text-base wf-font-bold wf-text-gray-900">
                            Bitcoin deposit
                        </span>
                        <span class="wf-text-sm wf-font-medium wf-text-gray-500">
                            08 Jan, 2022
                        </span>
                    </p>
                </div>
                <span class="wf-text-base wf-font-bold wf-text-gray-900">
                    $299.0
                </span>
            </div>
        </div>
    </div>
</template>