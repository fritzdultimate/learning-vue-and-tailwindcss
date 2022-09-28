<template>
    <div :class="['wf-flex wf-pb-10', {'wf-px-5': isFilteredPage}]">
        <span class="wf-p-4 wf-bg-gray-700 wf-rounded-full">
            <ViewColumnsIcon class="wf-w-5 wf-h-5 wf-text-white" />
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
    import { ViewColumnsIcon, BellIcon } from '@heroicons/vue/20/solid';
    import  router  from '@/router';
    import { computed } from 'vue';

    const activeLink = computed(() => router.currentRoute.value.path);
    const FILTER_PAGES_WITHOUT_PADDING = ['/app/space/user/profile', '/app/space/user/fund/invoice']
    const isFilteredPage = FILTER_PAGES_WITHOUT_PADDING.join(', ').includes(activeLink.value);
</script>