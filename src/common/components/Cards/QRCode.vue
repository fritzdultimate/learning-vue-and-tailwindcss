<template>
    <div>
        <QrcodeVue :value="value" :size="size" :render-as="renderAs" :margin="margin" :level="level" :background="background" :foreground="foreground" :class="className"></QrcodeVue>
    </div>
</template>

<script setup lang="ts">
    import QrcodeVue from 'qrcode.vue';

    interface Props {
        value,
        size? : number,
        renderAs?: {default: 'svg'},
        margin? : {default: 0},
        level? : {default: 'H'},
        background? : {default: '#ffffff'},
        foreground?: {default: '#000000'},
        className?
    }
    defineProps<Props>();
</script>