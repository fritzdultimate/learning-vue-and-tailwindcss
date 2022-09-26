<template>
    <div class="wf-w-full md:wf-w-[62%] wf-h-fi md:wf-px-4  wf-flex wf-justify-center">
        <div :class="['wf-h-full wf-w-full wf-bg-white md:wf-bg-gray-50 md:wf-rounded-t-3xl md:wf-shadow-lg wf-py-10', {'wf-px-5': !isFilteredPage}]">
            <slot name="header"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import  router  from '@/router';
    import { computed } from 'vue';

    const activeLink = computed(() => router.currentRoute.value.path);
    const FILTER_PAGES_WITHOUT_PADDING = ['/app/space/user/profile', '/app/space/user/fund/invoice']
    const isFilteredPage = FILTER_PAGES_WITHOUT_PADDING.join(', ').includes(activeLink.value);

    // console.log(isFilteredPage, activeLink.value,  router);
</script>