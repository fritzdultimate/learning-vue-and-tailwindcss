<template>
    <div class="py-16 wf-flex wf-px-10 wf-mb-4 wf-items-center">
        <span class="wf-text-base wf-font-bold wf-text-gray-900">
            Sound notification
        </span>
        <Switch
            v-model="enabled"
            :class="enabled ? 'wf-bg-blue-700' : 'wf-bg-gray-700'"
            class="wf-relative wf-ml-auto wf-inline-flex wf-h-[19px] wf-w-[50px] wf-shrink-0 wf-cursor-pointer wf-rounded-full wf-border-2 wf-border-transparent wf-transition-colors wf-duration-200 wf-ease-in-out focus:wf-outline-none focus-visible:wf-ring-2 focus-visible:wf-ring-white focus-visible:wf-ring-opacity-75"
        >
            <span class="wf-sr-only">Sound notification</span>
            <span
            aria-hidden="true"
            :class="enabled ? 'wf-translate-x-8' : 'wf-translate-x-0'"
            class="wf-pointer-events-none wf-inline-block wf-h-[15px] wf-w-[15px] wf-transform wf-rounded-full wf-bg-white wf-shadow-lg wf-ring-0 wf-transition wf-duration-200 wf-ease-in-out"
            />
        </Switch>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
  
  const enabled = ref(false)
  </script>