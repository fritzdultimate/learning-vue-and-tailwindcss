<template>
    <div class="wf-flex wf-justify-center wf-items-center wf-h-full wf-bg-black/5">
        <template v-for="(survey, i) in surveys" :key="i">
            <div class="wf-w-full wf-shadow-xl wf-bg-gray-50 wf-m-0 wf-flex wf-flex-col wf-px-3 wf-py-5">
                <h1 class="wf-text-gray-900 wf-font-bold wf-text-base wf-mb-5">
                    {{  survey.question }}
                </h1>
                <ul class="wf-flex wf-flex-col wf-items-start">
                    <li class="wf-flex wf-flex-col wf-mb-5 last:wf-mb-0 wf-w-full" v-for="answer in survey.answers" :key="answer.id">
                        <div class="wf-flex wf-items-center" :class="[survey.selectedId == 4 && answer.textbox ? 'wf-mb-5' : '']">
                            <span class="wf-h-5 wf-w-5 wf-rounded-full wf-cursor-pointer wf-mr-5" :class="[ survey.selectedId == answer.id ? 'wf-flex wf-justify-center wf-items-center wf-bg-yellow-700' : 'wf-bg-white wf-border wf-border-solid wf-border-gray-400 wf-block' ]" @click="survey.selectedId = answer.id">
                                <CheckIcon v-if="survey.selectedId == answer.id" class="wf-h-4 wf-w-4 wf-text-white"/>
                            </span>

                            <span class="wf-text-sm wf-font-bold wf-text-gray-900 wf-capitalize">
                                {{ answer.answer }}
                            </span>
                        </div>

                        <transition name="slide" appear>
                            <input v-if="survey.selectedId == 4 && answer.textbox" v-model="answer.value" class="wf-w-full wf-outline-none wf-rounded-full wf-border wf-border-gray-400 wf-px-3 wf-py-1.5 wf-font-medium wf-text-gray-800 focus:wf-ring-1 focus:wf-ring-yellow-500 wf-transition wf-duration-700" placeholder="please specify">
                        </transition>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { CheckIcon } from '@heroicons/vue/solid';
    import { ref } from 'vue';

    const surveys = ref([
        {
            question: 'What cryptocurrency are you familiar with?',
            answers: [
                {
                    answer: 'bitcoin',
                    id: 1
                },
                {
                    answer: 'ethereum',
                    id: 2
                },
                {
                    answer: 'tether',
                    id: 3
                },
                {
                    answer: 'other',
                    id: 4,
                    textbox: true,
                    value: ''
                }
            ],
            selectedId: null
        }
    ]);
</script>

<style scoped>
    .slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}
</style>