<template>
    <div>
        <label id="listbox-label" class="wf-block wf-text-xs wf-font-medium wf-text-gray-600">
            Assigned to
        </label>
        <div class="wf-mt-px wf-relative">
            <button type="button" @click="isSelecting = !isSelecting" class="wf-relative wf-w-full wf-bg-white wf-border wf-border-300 wf-rounded-md wf-shadow-sm wf-pl-3 wf-pr-10 wf-py-px wf-text-left wf-cursor-default focus:wf-outline-none focus:wf-ring-1 focus:wf-ring-indigo-yellow-500 focus:wf-border-yellow-500 sm:wf-text-sm" aria-expanded="true" aria-labelledby="listbox-label">
                <span class="wf-flex wf-items-center">
                    <!-- <img> -->
                    <span class="wf-ml-3 wf-block wf-truncate">
                        {{ selected.option }}
                    </span>
                </span>
                <span class="wf-ml-3 wf-absolute wf-inset-y-0 wf-right-0 wf-flex wf-items-center wf-pr-2 wf-pointer-events-none">
                    <!-- <SelectorIcon class="wf-h-5 wf-w-5 wf-text-gray-400" /> -->
                </span>
            </button>

            <ul class="wf-absolute wf-z-10 wf-mt-1 wf-w-full wf-bg-white wf-shadow-lg wf-max-h-56 wf-rounded-md wf-py-1 wf-text-base wf-ring-1 wf-ring-black wf-ring-opacity-5 wf-overflow-auto focus:wf-outline-none sm:wf-text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3" :class="[isSelecting ? 'wf-block' : 'wf-hidden']">
                <li :class="[ selected.id == option.id ? 'wf-text-white wf-bg-yellow-600' : 'wf-text-gray-900', 'wf-cursor-default wf-select-none wf-relative wf-py-2 wf-pl-3 wf-pr-9']" id="listbox-option-0" role="option" v-for="(option, id) in options" :key="option.id" @click="selectOption(id)">
                    <div class="wf-flex wf-items-center">
                        <!-- <img> -->
                        <span class="wf-font-normal wf-ml-3 wf-block wf-truncate">
                            {{ option.option }}
                        </span>
                    </div>

                    <template v-if="selected.id == option.id">
                        <span :class="[selected.id == option.id ? 'wf-text-white' : 'wf-text-yellow-600', 'wf-absolute wf-inset-y-0 wf-right-0 wf-flex wf-items-center wf-pr-4']">
                            <CheckIcon class="wf-h-5 wf-w-5" aria-hidden="true"/>
                        </span>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {  CheckIcon } from '@heroicons/vue/20/solid'
    import { ref } from 'vue';

    const isSelecting = ref(false);

    const options = [
        {
            id: 1,
            option: 'option 1'
        },
        {
            id: 2,
            option: 'option 2'
        },
        {
            id: 3,
            option: 'option 3'
        }
    ]

    const selected = ref(options[2]);
    function selectOption(id: number) {
        selected.value = options[id];
        isSelecting.value = false;
    }
</script>