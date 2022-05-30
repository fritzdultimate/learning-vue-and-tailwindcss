<template>
    <div>
        <!-- Sidebar backdrop (mobile only) -->
        <div class="wf-fixed wf-inset-0 wf-bg-slate-900 wf-bg-opacity-30 wf-z-40 lg:wf-hidden lg:wf-z-auto wf-transition-opacity wf-duration-200" :class="sidebarOpen ? 'wf-opacity-100' : 'wf-opacity-0 wf-pointer-events-none'" aria-hidden="true"></div>

        <!-- Sidebar -->
        <div
            id="sidebar"
            ref="sidebar"
            class="wf-flex wf-flex-col wf-absolute wf-z-40 wf-left-0 wf-top-0 lg:wf-static lg:wf-left-auto lg:wf-top-auto lg:wf-translate-x-0 wf-transform wf-h-screen wf-overflow-y-scroll lg:wf-overflow-y-auto wf-no-scrollbar wf-w-64 lg:wf-w-20 lg:sidebar-expanded:wf-!w-64 2xl:!w-64 wf-shrink-0 wf-bg-slate-800 wf-p-4 wf-transition-all wf-duration-200 wf-ease-in-out" :class="sidebarOpen ? 'wf-translate-x-0' : '-wf-translate-x-64'"
        >
            <!-- Sidebar header -->
            <div class="wf-flex wf-justify-between wf-mb-10 wf-pr-3 sm:wf-px-2">
            <!-- Close button -->
                <button
                    ref="trigger"
                    class="lg:wf-hidden wf-text-slate-500 hover:wf-text-slate-400"
                    @click="(sidebarOpen = !sidebarOpen)"
                    aria-controls="sidebar"
                    :aria-expanded="sidebarOpen"
                >
                    <span class="wf-sr-only">Close sidebar</span>
                    <svg class="wf-w-6 wf-h-6 wf-fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    const sidebarOpen = ref(false);
</script>