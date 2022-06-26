<template>
    <button class="wf-bg-transparent wf-font-medium wf-cursor-pointer hover:wf-underline hover:wf-underline-gray-600 " :class="[color, bg, colorHover]">
        <slot>
            back
        </slot>
    </button>
</template>

<script setup lang="ts">
interface Props {
    color?,
    bg?,
    colorHover?,
}
    defineProps<Props>();
</script>