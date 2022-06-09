<template>
    <div class="wf-w-1/3 wf-flex wf-justify-center wf-items-center wf-font-bold wf-text-xl wf-py-1 hover:wf-bg-gray-50" @click="selectNumber">
        <span v-if="!button.icon">{{ button.digit }}</span>
        <component v-else :is="button.icon" class="wf-w-5 wf-h-5"></component>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{button, modelValue}>()

    const emit = defineEmits(['update:modelValue', 'updateKeypadValues'])
    import { ref } from 'vue';

    const num = ref('')

    function selectNumber() {
        emit('update:modelValue', props.button)
        emit('updateKeypadValues');
    }
</script>