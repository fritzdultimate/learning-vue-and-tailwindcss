<template>
    <div class="wf-p-2 last:wf-mb-0 wf-flex wf-font-medium wf-shadow wf-cursor-pointer" :class="[bgColor, color]">
        <div class="wf-flex wf-items-center">
            <figure class="wf-flex-shrink-0 wf-flex wf-mr-5 wf-w-10 wf-h-10 wf-bg-gray-800 wf-rounded-full wf-justify-center wf-items-center">
                <!-- <img> -->
                <span class="wf-block wf-w-8 wf-h-8 wf-bg-red-800 wf-rounded-full"></span>
            </figure>
            <span class="wf-truncate wf-capitalize">
                {{ item }}
            </span>
        </div>
        <div class="wf-flex wf-items-center wf-ml-auto">
            <span class="">{{ amount }}</span>
            <!-- graph here -->
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        item: string,
        img: string,
        amount: number,
        graph: string,
        bgColor: string,
        color: string
    }

    defineProps<Props>();
</script>