<template>
    <figure class="wf-rounded-full wf-flex wf-justify-center wf-items-center wf-bg-gray-700 wf-mb-2" :class="[bgW, bgH]">
        <!-- <img> -->
        <span class="wf-bg-yellow-600 wf-rounded-full" :class="[imgWidth, imgHeight]"></span>
    </figure>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    const prop = defineProps<{
        img?,
        bgColor?: {default: 'wf-bg-gray-200'},
        bgW,
        bgH,
        imgW?,
        imgH?,
        space?: {default: false}
    }>();

    let imgWidth = computed(() => {
        if (!prop.space) {
            return prop.bgW
        }

        return prop.imgW && prop.imgH ? prop.imgW : prop.bgW;
    })

    let imgHeight = computed(() => {
        if (!prop.space) {
            return prop.bgH
        }

        return prop.imgH && prop.imgW ? prop.imgH : prop.bgH;
    })
</script>