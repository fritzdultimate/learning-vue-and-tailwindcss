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
            <ToggleButton :state="toggle" @update="text"></ToggleButton>
            <PromptModal :header="promptHeader" :message="promptMessage" :cancelText="promptCancelBtnText" :enableText="promptEnableBtnText" :visible="isPromptVisible" @dismiss="closePrompt" />
        </div>
    </main>
</template>

<script setup lang="ts">
    import ToggleButton from '../../../../common/components/Form/ToggleButton.vue';
    import PromptModal from '../../../../common/components/Cards/PromptModal.vue';
    import { ref, watch } from 'vue';

    const toggle = ref(false)
    const prompt = ref(null);
    const isPromptVisible = ref(false);
    const promptEnableBtnText = ref('Yes, enable');
    const promptCancelBtnText = ref('Cancel');
    const promptMessage = ref('Enter your password to confirm that you want to enable two-factor authentication.');
    const promptHeader = ref('Enable 2FA');

    watch(toggle, (value) => {
        if(value) {
           isPromptVisible.value = true;
        }
    })

    function text(e) {
        toggle.value = e;
    }

    function closePrompt(value) {
        if(typeof(value) == 'boolean' && value == false) {
            isPromptVisible.value = false;
            toggle.value = false;
        } else {
            isPromptVisible.value = false;
            // prompt value
            prompt.value = value;
            // using a middleware check if the user password is correct, before accepting the password
            // if password is wrong, notify user, and switch off the twoFactor
            console.log(prompt.value)
        }
    }
</script>

<style scoped>
    input:checked ~ .wf-dot {
        transform: translateX(100%);
        background-color: #48bb78;
    }
</style>

