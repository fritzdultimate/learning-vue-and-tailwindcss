<template>
    <transition name="fade" appear>
        <div class="wf-absolute wf-top-0 wf-left-0 wf-right-0 wf-bottom-0 wf-bg-black/30" v-if="visible" @click="$emit('closeModal')"></div>
    </transition>
    <transition name="slide" appear>
        <div class="wf-m-2 wf-rounded wf-absolute wf-top-0 wf-bottom-0 wf-flex wf-flex-col wf-justify-center wf-items-center wf-bg-white wf-px-3 wf-py-5" v-if="visible">
            <h1 class="wf-mb-5 wf-text-slate-900 wf-text-xl wf-font-bold wf-text-center"> {{ heading }}</h1>
            <p class="wf-text-center wf-text-sm wf-text-slate-700 wf-font-medium wf-mb-10">
                {{ message }}
            </p>
            <button class="wf-flex wf-justify-center wf-bg-yellow-600 wf-outline-transparent wf-border-0 wf-text-white wf-w-full wf-p-2 wf-rounded wf-text-sm wf-font-semibold focus:wf-ring focus:wf-ring-yellow-500/75 disabled:wf-opacity-75" @click="$emit('closeModal')">
                Close
            </button>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const emit = defineEmits(['closeModal']);
    defineProps<{visible, heading, message}>();
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: transform 1s;
    }

    .slide-enter-from, .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }
</style>