<template>
    <section role="" class="wf-bg-white/80 wf-rounded wf-px-24 wf-py-20 wf-mt-12">
        <span class="wf-px-6  wf-py-5 wf-bg-white/50 wf-rounded-full wf-m-5">
            <component :is="headerIcon.icon"  class="wf-w-10 wf-h-10 wf-fill-yellow-300 wf-stroke-yellow-700 wf-inline"/>
            <span class="wf-px-2 wf-font-bold wf-text-xl wf-text-yellow-700">{{ headerIcon.text }}</span>
        </span>
        <div class="wf-flex wf-my-12">
            <div class="wf-w-1/2">
                <h1 class="wf-text-yellow-700 wf-font-medium wf-text-4xl wf-font-sans wf-m-2 wf-px-3">
                    {{ header }}
                </h1>
                <ul class="wf-p-3 wf-m-2">
                    <component :is="DropDownSummaryList" v-for="(feature, i) in features" :key="i" :dataId="i" :data-id="i" @click="toggleFeature(i)" :currentId="current_id" :summary="feature.summary" :detail="feature.detail"/>
                </ul>
            </div>
            <div class="wf-w-1/2 wf-flex wf-justify-end">
                <div class="wf-ml-auto">
                    <img src="@/assets/img/tools/wallet-buy.png" class="wf-object-cover">
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import DropDownSummaryList from './DropDownSummaryList.vue'
    import { ref } from 'vue';

    interface Props {
        readonly features: {
            type: object,
            required: true
        },
        readonly header: string,
        readonly headerIcon: {
            type: object,
            required: true
        }
    };

    const props = defineProps<Props>();
    console.log(props.features)
    
    const current_id = ref(null);
    function toggleFeature(id) {
        current_id.value = id;
    }
</script>
