<template>
    <li class="wf-bg-yellow-300/20 wf-rounded-xl wf-border wf-border-yellow-900/10 wf-px-6 wf-py-4 wf-text-yellow-700 wf-font-medium wf-text-base wf-my-4 wf-cursor-pointer">
        {{ props.summary }}
        <transition
            enter-active-class="wf-duration-300 wf-ease-in wf-delay-150"
            enter-from-class="wf-transform wf-opacity-20 wf-colors h-0"
            enter-to-class="w-opacity-100 wf-h-auto"
            leave-active-class="wf-duration-200 wf-ease-out"
            leave-from-class="wf-opacity-100 wf-h-auto"
            leave-to-class="wf-transform wf-opacity-0 wf-h-0"
        >
            <p v-if="props.dataId == props.currentId" class="wf-my-3">
                {{ props.detail }}
            </p>
        </transition>
    </li>
</template>

<script setup lang="ts">
    const props = defineProps({
        dataId: { 
            type: Number,
            required: true 
        },
        currentId: {
            type: Number,
            default: null
        },
        detail: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        }
    })

</script>