<template>
    <div class="wf-flex wf-pb-10">
        <span class="wf-p-4 wf-bg-gray-700 wf-rounded-full">
            <ViewGridIcon class="wf-w-5 wf-h-5 wf-text-white" />
        </span>
        <div class="wf-relative wf-ml-auto wf-w-full">
            <div class="wf-bg-gray-700 wf-p-4 wf-w-1/2 md:wf-w-1/3 wf-absolute wf-top-0 -wf-right-[25%] wf-rounded-full wf-flex">
                <span class="wf-relative before:wf-absolute before:-wf-bottom-6 before:wf-right-1 before:wf-py-1 before:wf-px-1.5 before:wf-text-xs before:wf-font-bold wf-text-center before:wf-rounded-full before:wf-content-['9\+'] before:wf-text-white before:wf-bg-yellow-600">
                    <BellIcon class="wf-w-6 wf-h-6 wf-text-white" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ViewGridIcon, BellIcon } from '@heroicons/vue/solid';
</script>