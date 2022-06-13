<template>
    <di>
        <QrcodeVue :value="value" :size="size" :render-as="renderAs" :margin="margin" :level="level" :background="background" :foreground="foreground" :class="className"></QrcodeVue>
    </di>
</template>

<script setup lang="ts">
    import QrcodeVue from 'qrcode.vue';

    interface Props {
        value,
        size? : {default: 700},
        renderAs?: {default: 'svg'},
        margin? : {default: 0},
        level? : {default: 'H'},
        background? : {default: '#ffffff'},
        foreground?: {default: '#000000'},
        className?
    }
    defineProps<Props>();
</script>