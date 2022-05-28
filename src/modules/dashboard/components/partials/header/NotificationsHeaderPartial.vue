<template>
    <div class="wf-relative wf-inline-flex wf-ml-3">
        <button
        ref={trigger}
        class="wf-w-8 wf-h-8 wf-flex wf-items-center wf-justify-center wf-bg-slate-100 hover:wf-bg-slate-200 wf-transition wf-duration-150 wf-rounded-full" 
        :class="{'bg-slate-200' : dropdownOpen}"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        >
        <span class="wf-sr-only">Notifications</span>
        <svg class="wf-w-4 wf-h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path class="wf-fill-current wf-text-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
            <path class="wf-fill-current wf-text-slate-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg>
        <div class="wf-absolute wf-top-0 wf-right-0 wf-w-2.5 wf-h-2.5 wf-bg-rose-500 wf-border-2 wf-border-white wf-rounded-full"></div>
        </button>

        <!-- <Transition
            class="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
            show={dropdownOpen}
            enter="transition ease-out duration-200 transform"
            enterStart="opacity-0 -translate-y-2"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveStart="opacity-100"
            leaveEnd="opacity-0"
        > -->
        <div
            ref={dropdown}
        >
        <div class="wf-text-xs wf-font-semibold wf-text-slate-400 wf-uppercase wf-pt-1.5 wf-pb-2 wf-px-4">Notifications</div>
        <ul>
            <li class="wf-border-b wf-border-slate-200 last:wf-border-0" v-for="i in 5" :key="i">
            <router-link
                class="wf-block wf-py-2 wf-px-4 hover:wf-bg-slate-50"
                to="#0"
            >
                <span class="wf-block wf-text-sm wf-mb-2">
                    📣 
                    <span class="wf-font-medium wf-text-slate-800">
                        Edit your information in a swipe
                    </span> 
                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                </span>
                <span class="wf-block wf-text-xs wf-font-medium wf-text-slate-400">
                    Feb 12, 2021
                </span>
            </router-link>
            </li>
        </ul>
        </div>
        <!-- </Transition> -->
    </div>
</template>