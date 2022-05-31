<template>
    <div>
        <!-- Sidebar backdrop (mobile only) -->
        <div class="wf-fixed wf-inset-0 wf-bg-slate-900 wf-bg-opacity-30 wf-z-40 lg:wf-hidden lg:wf-z-auto wf-transition-opacity wf-duration-200" :class="sidebarOpen ? 'wf-opacity-100' : 'wf-opacity-0 wf-pointer-events-none'" aria-hidden="true"></div>

        <!-- Sidebar -->
        <div
            id="sidebar"
            ref="sidebar"
            class="wf-flex wf-flex-col wf-absolute wf-z-40 wf-left-0 wf-top-0 lg:wf-static lg:wf-left-auto lg:wf-top-auto lg:wf-translate-x-0 wf-transform wf-h-screen wf-overflow-y-scroll lg:wf-overflow-y-auto wf-no-scrollbar wf-w-64 lg:wf-w-64 lg:sidebar-expanded:wf-w-64 2xl:wf-w-64 wf-shrink-0 wf-bg-slate-800x wf-p-4 wf-transition-all wf-duration-200 wf-ease-in-out" :class="sidebarOpen ? 'wf-translate-x-0' : '-wf-translate-x-64'"
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
                <!-- Logo -->
                <router-link to="/" class="wf-block">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                        <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                        </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                    <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                    <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                    </svg>
                </router-link>
            </div>

            <!-- Links -->
            <div class="wf-space-y-8">
                <!-- Pages group -->
                <div>
                    <h3 class="wf-text-xs wf-uppercase wf-text-slate-500 wf-font-semibold wf-pl-3">
                    <span class="wf-hidden lg:wf-block lg:sidebar-expanded:wf-hidden 2xl:wf-hidden wf-text-center wf-w-6" aria-hidden="true">•••</span>
                    <span class="lg:wf-hidden lg:sidebar-expanded:wf-block 2xl:wf-block">Pages</span>
                    </h3>

                    <ul class="mt-3">
                        <!-- Dashboard -->
                        <li class="wf-px-3 wf-py-2 wf-rounded-sm wf-mb-0.5 last:wf-mb-0" :class="'wf-bg-slate-900'">
                            <router-link to="/" class="wf-block wf-text-slate-200 hover:wf-text-white wf-truncate wf-transition wf-duration-150" :class="'hover:wf-text-slate-200'">
                                <div class="wf-flex wf-items-center">
                                    <svg class="wf-shrink-0 wf-h-6 wf-w-6" viewBox="0 0 24 24">
                                    <path class="wf-fill-current wf-text-slate-400" :class="'wf-text-indigo-500'" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                                    <path class="wf-fill-current wf-text-slate-600" :class="'text-indigo-600'" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                                    <path class="wf-fill-current wf-text-slate-400" :class="'wf-text-indigo-200'" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                                    </svg>
                                    <span class="wf-text-sm wf-font-medium wf-ml-3 lg:wf-opacity- lg:sidebar-expanded:wf-opacity-100 2xl:wf-opacity-100 duration-200">Dashboard</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    const sidebarOpen = ref(false);
</script>