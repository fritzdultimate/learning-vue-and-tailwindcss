<template>
    <ViewWrapper :visibleHeader="false">
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-mb-5">
                <span class="wf-text-gray-700 wf-font-medium wf-text-base">
                    Send to
                </span>
                <span class="wf-ml-auto wf-p-1 wf-bg-gray-200 wf-text-gray-800 wf-flex wf-justify-center wf-items-center wf-rounded wf-cursor-pointer">
                    <XIcon class="wf-w-5 wf-h-5" />
                </span>
            </div>
            <div class="wf-flex wf-flex wf-flex-col wf-justify-center wf-items-center wf-mb-5">
                <figure class="wf-rounded-full wf-w-16 wf-h-16 wf-flex wf-justify-center wf-items-center wf-bg-gray-700 wf-mb-2">
                    <!-- <img> -->
                    <span class="wf-bg-yellow-700 wf-w-12 wf-h-12 wf-rounded-full"></span>
                </figure>
                <h4 class="wf-text-xl wf-font-bold wf-capitalize wf-text-gray-900 wf-mb-2">
                    Ethereum
                </h4>
                <div class="wf-flex wf-flex-wrap wf-justify-center">
                    <figure class="wf-rounded-full wf-w-5 wf-h-5 wf-flex wf-justify-center wf-items-center wf-bg-purple-700 wf-mr-2">
                        <span class="wf-bg-white wf-w-4 wf-h-4 wf-rounded-full"></span>
                    </figure>
                    <span class="wf-w-4/5 wf-text-gray-400 wf-font-medium wf-text-sm wf-truncate wf-font-mono">
                        0xf909603089e5a28798f92c512345339393
                    </span>
                </div>
            </div>

            <div class="wf-flex wf-flex-col">
                <div class="wf-flex wf-mb-5">
                    <div class="wf-flex wf-items-center wf-w-3/4">
                        <span class="wf-text-4xl wf-text-gray-900 wf-font-medium wf-truncate">ETH</span>
                        <ChevronDownIcon class="wf-w-6 wf-h-6" />
                    </div>
                    <span class="wf-ml-auto wf-text-5xl wf-font-light wf-text-gray-500">
                        0.02
                    </span>
                </div>

                <div class="wf-flex wf-mb-4">
                    <div class="wf-flex wf-flex-col">
                        <span class="wf-text-gray-400 wf-uppercase wf-font-medium wf-text-sm wf-mb-2">
                            your balance
                        </span>
                        <div class="wf-flex wf-bg-gray-200 wf-py-1 wf-px-2 wf-rounded">
                            <figure class="wf-rounded-full wf-w-5 wf-h-5 wf-flex wf-justify-center wf-items-center wf-bg-purple-700 wf-mr-2">
                                <!-- <img> -->
                                <span class="wf-bg-white wf-w-4 wf-h-4 wf-rounded-full"></span>
                            </figure>
                            <span class="wf-text-gray-800 wf-font-medium wf-text-sm wf-uppercase wf-font-bold">
                                1.28 eth
                            </span>
                        </div>
                    </div>
                    <span class="wf-ml-auto wf-uppercase wf-text-gray-400 wf-font-bold wf-text-sm wf-font-mono">
                        ~$98.26 usd
                    </span>
                </div>

                <div class="wf-flex wf-uppercase wf-text-sm wf-font-medium wf-mb-5">
                    <span class="wf-text-gray-400">
                        estimated fee
                    </span>
                    <span class="wf-ml-auto wf-text-gray-800 wf-font-bold">
                        0.0002 eth
                    </span>
                </div>
                
                <div class="wf-flex wf-flex-col wf-mb-5">
                    <span class="wf-text-gray-400 wf-text-sm wf-uppercase wf-mb-2">
                        add note
                    </span>
                    <div class="wf-w-full wf-border-b wf-border-b-gray-500">
                        <input type="text" placeholder="Note..." class="wf-font-medium wf-outline-none wf-border-none wf-w-full wf-py-1">
                    </div>
                </div>

                <button class="wf-w-full wf-bg-yellow-600 wf-text-gray-100 wf-rounded wf-text-xl wf-font-medium wf-py-3 hover:wf-bg-yellow-700 hover:wf-text-white hover:wf-ring hover:wf-ring-yellow-600">Send ETH</button>
            </div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import { onBeforeMount, onMounted, ref } from 'vue';
    import topbar from '../../../plugins/topbar';
    import { XIcon, ChevronDownIcon } from '@heroicons/vue/solid'

    onBeforeMount(() => topbar.show())
    onMounted(() => topbar.hide())
</script>