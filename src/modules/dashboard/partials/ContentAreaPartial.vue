<template>
    <div class="wf-w-full md:wf-w-[62%] wf-h-fi md:wf-px-4  wf-flex wf-justify-center">
        <div :class="['wf-h-full wf-w-full wf-bg-white md:wf-bg-gray-50 md:wf-rounded-t-3xl md:wf-shadow-lg wf-py-10', {'wf-px-5': !isInvoicePage}]">
            <slot name="header"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import  router  from '@/router';
    import { computed } from 'vue';

    const activeLink = computed(() => router.currentRoute.value.path);
    const isInvoicePage = activeLink.value.indexOf('fund/invoice') != -1;
</script>