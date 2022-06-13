<template>
    <li class="wf-flex wf-text-xs wf-font-medium wf-flex-wrap wf-border-b wf-border-dashed wf-border-gray-300 wf-py-2">
        <span class="wf-text-gray-800 wf-flex wf-items-center wf-capitalize">
            {{ title }}:
            <InformationCircleIcon class="wf-w-3 wf-h-3 wf-ml-px wf-text-gray-600" />
        </span>
        <span class="wf-ml-auto wf-flex wf-items-center" :class="[color]">
            <span class="wf-p-1 wf-mr-px hover:wf-bg-gray-200 wf-flex wf-justify-center wf-items-center wf-rounded">
                <component :is="preIcon" v-if="preIcon" class="wf-w-3 wf-h-3" />
            </span>
            <span v-html="parseLink" :class="[valuePad ? 'wf-border wf-border-gray-700 wf-px-px wf-rounded' : '']"></span>
            <span v-if="amount" class="wf-text-base wf-ml-2">{{ amount }}</span>
            <span v-if="fee" class="wf-ml-2">{{ fee }}</span>
            <span v-if="subvalue" class="wf-ml-2 wf-text-[10px] wf-px-1 wf-font-bold" :class="[tagged ? 'wf-bg-gray-200 wf-rounded wf-text-gray-600' : '']"> {{ subvalue }}</span>
            <span v-if="copy" class="wf-p-1 wf-ml-1 hover:wf-bg-gray-200 wf-flex wf-justify-center wf-items-center wf-rounded">
                <ClipboardIcon class="wf-w-3 wf-h-3" />
            </span>
        </span>
    </li>
</template>

<script setup lang="ts">
    import { InformationCircleIcon, ClipboardIcon, CheckCircleIcon } from '@heroicons/vue/solid';
    import { computed } from 'vue';

    interface Props {
        title,
        value,
        copy,
        info,
        preIcon?,
        color,
        link?,
        to?,
        subvalue?,
        tagged?,
        valuePad?,
        amount?,
        fee?,
    }

    const props = defineProps<Props>();

    const parseLink = computed(() => props.link? `<a class="wf-text-yellow-500" href="${ props.to }">${ props.value }</a>` : props.value);
</script>