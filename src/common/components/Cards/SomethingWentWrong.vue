<template>
    <transition name="fade" appear>
        <div class="wf-absolute wf-top-0 wf-left-0 wf-right-0 wf-bottom-0 wf-bg-black/30 wf-cursor-pointer" v-if="visible" @click="$emit('closeModal')"></div>
    </transition>
    <transition name="slide" appear>
        <div class="wf-m-2 md:wf-m-4 wf-rounded md:wf-rounded-3xl wf-absolute wf-top-0 wf-bottom-0 wf-flex wf-flex-col wf-justify-center wf-items-center wf-bg-white wf-px-3 wf-py-5 md:wf-w-2/3 lg:wf-w-4/5 wf-overflow-y-hidden" v-if="visible">
            <figure class="wf-flex-shrink-0 wf-mb-10 wf-w-full wf-h-auto md:wf-h-78 m:wf-w-2/4">
                <img :src="image" :alt="heading" class="wf-bg-cover wf-h-full wf-w-full">
            </figure>
            <h1 class="wf-mb-5 wf-text-slate-900 wf-text-xl wf-font-bold wf-text-center md:wf-w-2/3"> {{ heading }}</h1>
            <p class="wf-text-center wf-text-sm wf-text-slate-700 wf-font-medium wf-mb-10 md:wf-w-2/3">
                {{ message }}
            </p>
            <button class="wf-flex wf-justify-center wf-w-1/2 md:wf-w-1/3 wf-bg-yellow-600 wf-outline-transparent wf-border-0 wf-text-white wf-w-full wf-p-2 wf-rounded wf-text-sm wf-font-semibold focus:wf-ring focus:wf-ring-yellow-500/75 disabled:wf-opacity-75 md:wf-mb-5" @click="$emit('closeModal')">
                Close
            </button>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const emit = defineEmits(['closeModal']);
    defineProps<{visible, heading, message, image}>();
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