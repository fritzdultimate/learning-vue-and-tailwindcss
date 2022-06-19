<template>
    <div class="wf-flex  wf-justify-center wf-flex-wrap">
        <!-- {{ clear }} = {{ focusCountLocal }} -->
        <KeypadLine v-for="(button, i) in buttons" :key="i" :button="button" v-model="value"
            @updateKeypadValues="buildValues" />
    </div>
</template>

<script setup lang="ts">
    import KeypadLine from './KeypadButton.vue';
    import { ref, watch, markRaw } from 'vue';

    interface Props {
        buttons: object,
        modelValue: any,
        focusCount: {
            type: number,
            required: false,
            default: 0
        },
        inputs : {
            type: object,
            required : false,
            default : {}
        }
    }
    const props = defineProps<Props>();
    const emit = defineEmits(['update:modelValue'])
    const value = ref({});
    let final_values = (props.modelValue);

    watch(props, (currentProp) => {
        console.log(Object.keys(currentProp).length);
        if(currentProp.inputs){
            let { currentlyFocused } = currentProp.inputs;
            final_values = currentProp.inputs[currentlyFocused].value;
        }
        
    });

    function formatNumber(num) {
        if(num == '.') {
            final_values = '0.';
            return '0.'
        }
        return num;
    }


    function buildValues() {
        
        if(final_values.indexOf('.') != -1 && value.value.digit == '.') {
            return;
        }
        if(value.value.hasOwnProperty('action')) {
            final_values = final_values.slice(0, final_values.length - 1)
        } else {
            // final_values = "";
            final_values += value.value.digit;
        }
        emit('update:modelValue', formatNumber(final_values))
    }
    console.log(0.)
</script>