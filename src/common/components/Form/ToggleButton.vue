<template>
    <label class="wf-items-center wf-cursor-pointer wf-inline" for="switch">
        <div class="wf-relative">
            <input ref="checkbox" type="checkbox" id="switch" class="wf-sr-only" @change="toggle">
            <!-- line -->
            <div class="wf-line wf-block wf-bg-gray-600 wf-w-[53px] wf-h-7 wf-rounded-full"></div>
            <!-- dot -->
            <div class="wf-dot wf-absolute wf-left-0.5 wf-top-0.5 wf-bg-white wf-w-6 wf-h-6 wf-rounded-full wf-transition"></div>
        </div>
        <!-- label (optional) -->
        <div class="wf-ml-3 wf-text-gray-700 wf-font-medium">
            <slot></slot>
        </div>
    </label>
</template>

<script setup lang="ts">
    import { ref, onMounted, watch } from 'vue';

    const props = defineProps<{state}>();
    const checkbox = ref(null);
    const emit = defineEmits(['update'])

    function toggle() {
        console.log(checkbox.value.checked, props.state)
        emit('update', checkbox.value.checked);
    }

    watch(() => props.state, (value) => {
        console.log('changed', value)
        checkbox.value.checked = value;
    })

    onMounted(() => checkbox.value.checked = props.state)
</script>

<style scoped>
    input:checked ~ .wf-dot {
        transform: translateX(100%);
        background-color: #fff;
    }

    input:checked ~ .wf-line {
        background-color: rgba(217, 119, 6);
    }
</style>

