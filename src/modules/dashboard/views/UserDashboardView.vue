<template>
    <div class="wf-flex wf-h-screen wf-overflow-hidden wf-bg-gray-100">

      <!-- Sidebar  -->
      <SidebarPartial />

      <!-- Content area  -->
      <div class="wf-relative wf-flex wf-flex-col wf-flex-1 wf-overflow-y-auto wf-overflow-x-hidden">
            <header class="wf-sticky wf-top-0 wf-bg-white wf-border-b wf-border-slate-200 wf-z-30">
                <div class="wf-px-4 sm:wf-px-6 lg:wf-px-8">
                    <div class="wf-flex wf-items-center wf-justify-between wf-h-16 -wf-mb-px">
                        <!-- Header: Left side -->
                        <div class="wf-flexx wf-hidden">

                            <!-- Hamburger button -->
                            <button
                            class="wf-text-slate-500 hover:wf-text-slate-600 lg:wf-hidden"
                            aria-controls="sidebar"
                            :aria-expanded="false"
                            >
                            <span class="wf-sr-only">Open sidebar</span>
                            <svg class="wf-w-6 wf-h-6 wf-fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="5" width="16" height="2" />
                                <rect x="4" y="11" width="16" height="2" />
                                <rect x="4" y="17" width="16" height="2" />
                            </svg>
                            </button>

                        </div>

                        <!-- /* Header: Right side */ -->
                        <div class="wf-flex wf-items-center wf-ml-auto">

                            <button
                            class="wf-w-8 wf-h-8 wf-flex wf-items-center wf-justify-center wf-bg-slate-100 hover:wf-bg-slate-200 wf-transition wf-duration-150 wf-rounded-full wf-ml-3" 
                            :class="{'bg-slate-200' : searchModalOpen }"
                            aria-controls="search-modal"
                            >
                                <span class="wf-sr-only">Search</span>
                                <svg class="wf-w-4 wf-h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path class="wf-fill-current wf-text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path class="wf-fill-current wf-text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                            </button>
                            <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
                            <NotificationsHeaderPartial />
                            <Help />
                            <!-- /*  Divider */ -->
                            <hr class="wf-w-px wf-h-6 wf-bg-slate-200 wf-mx-3" />
                            <UserMenuHeaderPartial />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>

</template>

<script setup lang="ts">
    import NotificationsHeaderPartial from '../partials/NotificationsHeaderPartial.vue'
    import UserMenuHeaderPartial from '../partials/UserMenuHeaderPartial.vue'
    // import HelpHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    // import SearchModalHeaderPartial from '../components/partials/header/HelpHeaderPartial.vue'
    import SidebarPartial from '../partials/SidebarPartial.vue'
</script>