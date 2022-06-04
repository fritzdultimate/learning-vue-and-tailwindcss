<template>
    <div class="wf-flex wf-bg-white wf-w-48 wf-h-10 wf-rounded-lg wf-shadow-sm wf-border wf-border-gray-100 wf-relative wf-text-gray-400 wf-overflow-hidden">
        <SearchIcon class="wf-w-5 wf-h-5 wf-absolute wf-top-2.5 wf-left-2" />
        <input class="wf-ml-7 wf-pr-10 wf-bg-transparent wf-w-full wf-h-full wf-outline-0 wf-px-2 wf-text-sm wf-placeholder-gray-300" placeholder="Search Spacearn">
    </div>
</template>

<script setup lang="ts">
    import { SearchIcon } from '@heroicons/vue/outline'
</script>