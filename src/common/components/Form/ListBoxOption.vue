<template>
    <slot :active="active" :selected="selected" @click="selectOption"></slot>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface Props {
        value: string
    }
    defineProps<Props>();

    const active = ref(false);
    const selected = ref(false);

    function selectOption() {
        active.value = true;
        selected.value = true;
        alert('ff')
    }
</script>