<template>
    <div class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-h-full wf-bg-black/5 wf-relative">
        <router-link to="/auth/register/setups/ready" class="wf-capitalize wf-absolute wf-right-0 wf-top-0 wf-m-5 wf-font-bold wf-text-sm wf-border wf-p-2 wf-border-yellow-700/50 wf-text-yellow-600 hover:wf-text-yellow-700">Skip</router-link>
        <template v-for="(survey, i) in surveys" :key="i">
            <transition name="slide" appear>
                <div class="wf-flex wf-flex-col wf-items-center" v-if="survey.id == activeSurvey">
                    <KeepAlive>
                        <SurveyComponent :survey="survey" :results="surveyResults" v-model="value" @skipQuestion="skipSurvey"/>
                    </KeepAlive>
                    <ActionBtn :class="'wf-w-1/2 wf-py-3 wf-capitalize wf-text-base wf-mt-5 wf-mb-5'" @click="skipQuestion(survey.id)">
                        {{ continueBtn }}
                    </ActionBtn>
                </div>
            </transition>
        </template>

        <FlatBtn class="wf-capitalize wf-font-normal" v-if="activeSurvey > 0" @click="activeSurvey = activeSurvey-1"/>
    </div>
</template>

<script setup lang="ts">
    import ActionBtn from '../../../../common/components/Form/ActionBtn.vue';
    import FlatBtn from '../../../../common/components/Form/FlatBtn.vue';
    import SurveyComponent from '../components/SurveyComponent.vue';
    import { ref, watch } from 'vue';
    import router from '@/router';

    const continueBtn = ref('continue');
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

    const surveyResults = ref([]);
    const value = ref({});
    function uniqueSurveyResults(result) {
        if(result.hasOwnProperty('surveyId')) {
            return surveyResults.value.filter(el => el.surveyId != result.surveyId);
        }
    }
    watch(value, (value) => {
        surveyResults.value = uniqueSurveyResults(value)
        surveyResults.value.push(value);
        let surveyAtEnd = surveyResults.value.filter(el => el.surveyId == surveys.value[surveys.value.length -1].id);

        // change the continue button to finish when survey is at the end
        if(surveyAtEnd.length) {
            continueBtn.value = 'finish';
        }
    })

    function skipQuestion(surveyId) {
        let surveyAnswered = surveyResults.value.filter(el => el.surveyId == surveyId);
        if(!surveyAnswered.length) {
            alert('please select an option or skip this question');
            return;
        }
        if(activeSurvey.value == (surveys.value.length - 1)) {
            // push to a new route
            console.log(router)
            // router.go({ name: "RegistrationGettingStarted" });
        }
        activeSurvey.value += 1;
    }
    function skipSurvey() {
        activeSurvey.value = (activeSurvey.value == (surveys.value.length - 1)) ? 0 : activeSurvey.value += 1;
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