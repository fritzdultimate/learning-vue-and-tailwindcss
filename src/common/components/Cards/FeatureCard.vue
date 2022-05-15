<template>
    <div class="wf-bg-black/30 wf-p-4 wf-shadow-lg wf-rounded md:wf-basis-1/4 md:wf-mx-2 wf-flex wf-flex-col wf-items-center wf-justify-center wf-m-2 wf-mx-12">
        <div class="wf-bg-black/50 wf-rounded-full wf-p-3 wf-mb-6">
            <slot name="icon"></slot>
        </div>
        <h4 class="wf-text-center wf-text-gray-200 wf-text-base md:wf-text-sm wf-font-bold">
            <slot name="header"></slot>
        </h4>
        <p class="wf-text-gray-600/60 wf-font-medium wf-text-xs wf-mt-0 md:wf-mt-4 wf-text-center">
            <slot></slot>
        </p>
    </div>
</template>

<script setup lang="ts">
</script>