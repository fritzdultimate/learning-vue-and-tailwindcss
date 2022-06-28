<template>
    <main class="wf-bg-gray-100 wf-h-full wf-flex wf-justify-center wf-items-center">
        <div class="wf-flex wf-items-center wf-bg-white wf-shadow-lg wf-min-h-1/3 md:wf-w-1/3 wf-rounded-md  wf-p-4 md:wf-m-0 wf-m-4 wf-w-full">
            <div>
                <h3 class="wf-text-gray-800 wf-font-bold wf-text-base wf-mb-1">
                    Two-factor authentication
                </h3>
                <p class="wf-text-xs wf-text-gray-600 wf-font-medium">
                    Help protect your account from unauthorized access by requiring a second authentication method in addition to your password.
                </p>
            </div>
            <ToggleButton v-model="toggle"></ToggleButton>
            <PromptModal />
        </div>
    </main>
</template>

<script setup lang="ts">
    import ToggleButton from '../../../../common/components/Form/ToggleButton.vue';
    import PromptModal from '../../../../common/components/Cards/PromptModal.vue';
    import { ref, watch } from 'vue';

    const toggle = ref(false)

    watch(toggle, (value) => {
        console.log(watch)
    })
</script>

<style scoped>
    input:checked ~ .wf-dot {
        transform: translateX(100%);
        background-color: #48bb78;
    }
</style>

