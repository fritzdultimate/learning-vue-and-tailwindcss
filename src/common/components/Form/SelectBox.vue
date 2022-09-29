<template>
    <Listbox as="div" v-model="selected" class="wf-w-full wf-mb-5">
        <div class="wf-relative wf-mt-1 wf-mx-20">
        <ListboxButton class="wf-relative wf-w-full wf-cursor-default wf-rounded-md wf-border wf-border-gray-300 wf-bg-white wf-py-2 wf-pl-3 wf-pr-10 text-left wf-shadow-sm focus:wf-border-indigo-500 focus:wf-outline-none focus:wf-ring-1 focus:wf-ring-indigo-500 sm:wf-text-sm">
            <span class="wf-flex wf-items-center">
            <img :src="selected.avatar" alt="" class="wf-h-6 wf-w-6 wf-flex-shrink-0 wf-rounded-full" />
            <span class="wf-ml-3 wf-block wf-truncate">{{ selected.name }}</span>
            </span>
            <span class="wf-pointer-events-none wf-absolute wf-inset-y-0 wf-right-0 wf-ml-3 wf-flex wf-items-center wf-pr-2">
            <ChevronUpDownIcon class="wf-h-5 wf-w-5 wf-text-gray-400" aria-hidden="true" />
            </span>
        </ListboxButton>

        <transition leave-active-class="wf-transition wf-ease-in wf-duration-100" leave-from-class="wf-opacity-100" leave-to-class="wf-opacity-0">
            <ListboxOptions class="wf-absolute wf-z-10 wf-mt-1 wf-max-h-56 wf-w-full wf-overflow-auto wf-rounded-md wf-bg-white wf-py-1 wf-text-base wf-shadow-lg wf-ring-1 wf-ring-black wf-ring-opacity-5 focus:wf-outline-none sm:wf-text-sm">
            <ListboxOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ active, selected }" @click="selectOption(option.name)">
                <li :class="[active ? 'wf-text-white wf-bg-indigo-600' : 'wf-text-gray-900', 'wf-relative wf-cursor-default wf-select-none wf-py-2 wf-pl-3 wf-pr-9']">
                <div class="wf-flex wf-items-center">
                    <img :src="option.avatar" alt="" class="wf-h-6 wf-w-6 wf-flex-shrink-0 wf-rounded-full" />
                    <span :class="[selected ? 'wf-font-semibold' : 'wf-font-normal', 'wf-ml-3 wf-block wf-truncate']">{{ option.name }}</span>
                </div>
                <span v-if="selected" :class="[active ? 'wf-text-white' : 'wf-text-indigo-600', 'wf-absolute wf-inset-y-0 wf-right-0 wf-flex wf-items-center wf-pr-4']">
                    <CheckIcon class="wf-h-5 wf-w-5" aria-hidden="true" />
                </span>
                </li>
            </ListboxOption>
            </ListboxOptions>
        </transition>
        </div>
    </Listbox>
</template>

<script setup lang="ts">
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ref } from 'vue';

const emit = defineEmits(['update:value'])
type Option = {
    id?: number
    avatar?: string;
    name: string;
};
const props = defineProps<{
    options: Array<Option>,
    selectedIndex: number
}>()

const selected = ref(props.options[props.selectedIndex]);

function selectOption(val: string) {
    console.log(val)
    emit('update:value', val)
}
</script>