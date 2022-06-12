<template>
    <div class="wf-flex  wf-justify-center wf-flex-wrap">
        <KeypadLine v-for="(button, i) in buttons" :key="i" :button="button" v-model="value" @updateKeypadValues="buildValues"/>
    </div>
</template>

<script setup lang="ts">
    import KeypadLine from './KeypadButton.vue';
    import { ref } from 'vue';

    interface Props {
        buttons: object,
        modelValue: string
    }
    const props = defineProps<Props>();
    const emit = defineEmits(['update:modelValue'])
    const value = ref({});
    const final_values = ref(props.modelValue)

    function formatNumber(num) {
        if(num == '.') {
            final_values.value = '0.';
            return '0.'
        }

        return num;
    }


    function buildValues() {
        if(final_values.value.indexOf('.') != -1 && value.value.digit == '.') {
            return;
        }
        if(value.value.hasOwnProperty('action')) {
            final_values.value = final_values.value.slice(0, final_values.value.length - 1)
        } else {
            final_values.value += value.value.digit;
        }
        emit('update:modelValue', formatNumber(final_values.value))
    }
    console.log(0.)
</script>