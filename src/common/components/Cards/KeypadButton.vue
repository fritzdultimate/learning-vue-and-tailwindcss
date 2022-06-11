<template>
    <div class="wf-w-1/3 wf-flex wf-justify-center wf-items-center wf-font-bold wf-text-xl wf-py-1 wf-cursor-pointer" @click="selectNumber">
        <div class="wf-bg-gray-100 wf-rounded-md wf-m-2 wf-w-full wf-h-full wf-flex wf-justify-center wf-items-center hover:wf-bg-gray-300">
            <span v-if="!button.icon">{{ button.digit }}</span>
            <component v-else :is="button.icon" class="wf-w-6 wf-h-6"></component>
        </div>
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