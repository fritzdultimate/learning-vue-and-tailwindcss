<template>
    <span class="wf-flex wf-justify-center wf-items-center wf-px-2 wf-py-2 wf-bg-gray-100/50 wf-shadow wf-rounded-md">
        <i class="wf-relative before:wf-absolute before:wf-top-[1px] before:wf-right-[4px] before:wf-content-[''] before:wf-w-[7px] before:wf-h-[7px] before:wf-bg-red-600 before:wf-rounded-full">
            <BellIcon class="wf-w-6 wf-h-auto wf-text-slate-900/75" />
        </i>
    </span>
</template>

<script setup lang="ts">
    import { BellIcon } from '@heroicons/vue/outline'; 
</script>