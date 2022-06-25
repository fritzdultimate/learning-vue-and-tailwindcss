<template>
    <div class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-h-full wf-bg-black/5 wf-relative">
        <FlatBtn class="wf-capitalize wf-absolute wf-right-0 wf-top-0 wf-m-5 wf-font-bold wf-text-sm wf-border wf-p-2 wf-border-yellow-700/50" color="wf-text-yellow-600" colorHover="hover:wf-text-yellow-700">Skip</FlatBtn>
        <template v-for="(survey, i) in surveys" :key="i">
            <transition name="slide" appear>
                <div class="wf-w-full wf-shadow-xl wf-bg-gray-50 wf-m-0 wf-flex wf-flex-col wf-px-3 wf-py-5 wf-mb-5" v-if="survey.id == activeSurvey">
                    <h1 class="wf-text-gray-900 wf-font-bold wf-text-base wf-mb-5">
                        {{  survey.question }}
                    </h1>
                    <ul class="wf-flex wf-flex-col wf-items-start">
                        <li class="wf-flex wf-flex-col wf-mb-5 last:wf-mb-0 wf-w-full" v-for="answer in survey.answers" :key="answer.id" @click="survey.selectedId = answer.id">
                            <div class="wf-flex wf-items-center" :class="[survey.selectedId == 4 && answer.textbox ? 'wf-mb-5' : '']">
                                <span class="wf-h-5 wf-w-5 wf-rounded-full wf-cursor-pointer wf-mr-5" :class="[ survey.selectedId == answer.id ? 'wf-flex wf-justify-center wf-items-center wf-bg-yellow-700' : 'wf-bg-white wf-border wf-border-solid wf-border-gray-400 wf-block' ]">
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
                    <dl class="wf-flex sm:wf-block lg:wf-flex xl:wf-block wf-mt-5">
                        <div class="wf-flex wf-items-center wf-w-full">
                            <dt class="wf-sr-only">Users</dt>
                            <dd class="wf-flex wf-justify-en sm:wf-justify-start lg:wf-justify-end xl:wf-justify-start -wf-space-x-2">
                                <img src="../../../../assets/img/fritz_3.jpg" v-for="i in 4" :key="i" alt="" class="wf-w-6 wf-h-6 wf-rounded-full wf-bg-slate-100 wf-ring-2 wf-ring-white" loading="lazy">
                            </dd>
                            <span class="wf-text-sm wf-text-gray-500 wf-font-bold wf-ml-3">Total answers: 24</span>

                            <ActionBtn :class="'wf-capitalize wf-text-base wf-mt-5 wf-mb-5 wf-bg-purple-500 wf-ml-auto wf-px-4 wf-py-1.5'" @click="activeSurvey = activeSurvey+1">
                                skip
                            </ActionBtn>
                        </div>
                    </dl>
                </div>
            </transition>
        </template>

        <ActionBtn :class="'wf-w-1/2 wf-py-3 wf-capitalize wf-text-base wf-mt-5 wf-mb-5'" @click="activeSurvey = activeSurvey+1">
            continue
        </ActionBtn>

        <FlatBtn class="wf-capitalize wf-font-normal" v-if="activeSurvey > 0" @click="activeSurvey = activeSurvey-1"/>
    </div>
</template>

<script setup lang="ts">
    import ActionBtn from '../../../../common/components/Form/ActionBtn.vue';
    import FlatBtn from '../../../../common/components/Form/FlatBtn.vue';
    import { CheckIcon } from '@heroicons/vue/solid';
    import { ref } from 'vue';

    const activeSurvey = ref(0);
    const surveys = ref([
        {
            id: 0,
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
        },
        {
            id: 1,
            question: 'What cryptocurrency are you familiar with? second',
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
    transition: transform .5s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}
</style>