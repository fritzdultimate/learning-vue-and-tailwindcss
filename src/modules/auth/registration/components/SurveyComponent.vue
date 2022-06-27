<template>
    <div class="wf-w-full wf-shadow-xl wf-bg-gray-50 wf-m-0 wf-flex wf-flex-col wf-px-3 wf-py-5 wf-mb-5">
        <h1 class="wf-text-gray-900 wf-font-bold wf-text-base wf-mb-5">
            {{  survey.question }}
        </h1>
        <ul class="wf-flex wf-flex-col wf-items-start">
            <li class="wf-flex wf-flex-col wf-mb-5 last:wf-mb-0 wf-w-full" v-for="answer in survey.answers" :key="answer.id" @click="chooseOption(survey.id, answer)">
                <div class="wf-flex wf-items-center" :class="[selectedId == survey.answers.length && answer.textbox ? 'wf-mb-5' : '']">
                    <span class="wf-h-5 wf-w-5 wf-rounded-full wf-cursor-pointer wf-mr-5" :class="[ selectedId == answer.id ? 'wf-flex wf-justify-center wf-items-center wf-bg-yellow-700' : 'wf-bg-white wf-border wf-border-solid wf-border-gray-400 wf-block' ]">
                        <CheckIcon v-if="selectedId == answer.id" class="wf-h-4 wf-w-4 wf-text-white"/>
                    </span>

                    <span class="wf-text-sm wf-font-bold wf-text-gray-900 wf-capitalize">
                        {{ answer.answer }}
                    </span>
                </div>

                <transition name="slide" appear>
                    <input v-if="selectedId == survey.answers.length && answer.textbox" v-model="other" @input="chooseOption(survey.id, answer)" class="wf-w-full wf-outline-none wf-rounded-full wf-border wf-border-gray-400 wf-px-3 wf-py-1.5 wf-font-medium wf-text-gray-800 focus:wf-ring-1 focus:wf-ring-yellow-500 wf-transition wf-duration-700" placeholder="please specify">
                </transition>
            </li>
            <dl class="wf-flex sm:wf-block lg:wf-flex xl:wf-block wf-mt-5 wf-w-full">
                <div class="wf-flex wf-items-center wf-w-full">
                    <dt class="wf-sr-only">Users</dt>
                    <dd class="wf-flex wf-justify-en sm:wf-justify-start lg:wf-justify-end xl:wf-justify-start -wf-space-x-2">
                        <img src="../../../../assets/img/fritz_3.jpg" v-for="i in 4" :key="i" alt="" class="wf-w-6 wf-h-6 wf-rounded-full wf-bg-slate-100 wf-ring-2 wf-ring-white" loading="lazy">
                    </dd>
                    <span class="wf-text-sm wf-text-gray-500 wf-font-bold wf-ml-3">Total answers: 24</span>

                    <ActionBtn :class="'wf-capitalize wf-text-base wf-mt-5 wf-mb-5 wf-bg-purple-500 hover:wf-ring hover:wf-ring-purple-600  focus:wf-ring-purple-600 wf-ml-auto wf-px-4 wf-py-1.5'" @click="skipQuestion">
                        skip
                    </ActionBtn>
                </div>
            </dl>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import ActionBtn from '../../../../common/components/Form/ActionBtn.vue';
    import { CheckIcon } from '@heroicons/vue/solid';
    import { ref, computed } from 'vue';
    interface Props {
        survey,
        results
    }
    const props = defineProps<Props>()
    const emit = defineEmits(['update:modelValue', 'skipQuestion'])
    const surveyResult = ref(props.results[props.survey.id]);
    const selectedId = surveyResult.value ? ref(surveyResult.value.answerId) : ref(props.survey.selectedId);
    const initialOtherText = surveyResult.value ? surveyResult.value.text : '';
    const other = ref(initialOtherText);
    const result = ref({});

    function skipQuestion() {
        emit('skipQuestion', props.survey.id);
    }

    function chooseOption(surveyId, ans) {
        selectedId.value = ans.id;
        result.value = {
            surveyId,
            answerId: ans.id,
            answer: ans.answer,
            text: other.value ?? null
        }
        emit('update:modelValue', result.value);
    }
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