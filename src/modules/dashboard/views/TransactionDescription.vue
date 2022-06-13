<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-flex-col wf-border-b wf-border-b-gray-200 wf-pb-2 wf-mb-5">
                <h3 class="wf-text-base wf-text-gray-800 wf-font-bold wf-mb-2">
                    Transaction Details
                </h3>
                <div class="wf-flex">
                    <span class="wf-bg-orange-100 wf-text-orange-500 wf-font-medium wf-text-xs md:wf-text-sm wf-px-2 wf-py-1 wf-rounded wf-mr-2 wf-flex">
                        Private Transaction
                        <InformationCircleIcon class="wf-ml-1 wf-w-4 wf-h-4" />
                    </span>
                    <span class="wf-bg-blue-100 wf-text-blue-500 wf-font-medium wf-text-xs md:wf-text-sm wf-px-2 wf-py-1 wf-rounded wf-mr-2">Spacearn</span>
                </div>
            </div>

            <div class="">
                <ul class="wf-flex wf-flex-col">
                    <li class="wf-flex wf-text-xs wf-flex-wrap">
                        <span class="wf-text-gray-800 wf-flex">
                            Transaction hash
                            <InformationCircleIcon class="wf-w-4 wf-h-4 wf-ml-1" />
                        </span>
                        <span class="wf-ml-auto wf-flex wf-text-gray-600">
                            0x20678936448eb484945940cae84940988499840393
                            <span class="wf-p-1 hover:wf-bg-gray-200">
                                <ClipboardIcon class="wf-w-4 wf-h-4 wf-ml-1" />
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import { InformationCircleIcon, ClipboardIcon } from '@heroicons/vue/solid'
</script>