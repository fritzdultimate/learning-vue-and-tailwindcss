<template>
    <section role="" class="wf-bg-white/80 wf-rounded wf-px-1 md:wf-px-24 wf-py-20 wf-mt-12">
        <span class="wf-px-3 md:wf-px-6  wf-py-3 md:wf-py-5 wf-bg-white/50 wf-rounded-full md:wf-m-5">
            <component :is="headerIcon.icon"  class="wf-w-4 wf-h-4 md:wf-w-10 md:wf-h-10 wf-fill-yellow-300 wf-stroke-yellow-700 wf-inline"/>
            <span class="wf-px-2 wf-font-bold wf-text-base md:wf-text-xl wf-text-yellow-700">{{ headerIcon.text }}</span>
        </span>
        <div class="wf-flex wf-my-12 wf-flex-col md:wf-flex-row">
            <div class="wf-w-full md:wf-w-1/2 wf-order-last md:wf-order-first wf-my-4 md:wf-my-0">
                <h1 class="wf-text-yellow-700 wf-font-medium wf-text-2xl md:wf-text-4xl wf-font-sans wf-m-2 wf-px-3 wf-text-center md:wf-text-left">
                    {{ header }}
                </h1>
                <ul class="wf-px-3">
                    <component :is="DropDownSummaryList" v-for="(feature, i) in features" :key="i" :dataId="i" @click="toggleFeature(i)" :currentId="current_id" :summary="feature.summary" :detail="feature.detail"/>
                </ul>
            </div>
            <div class="wf-w-full md:wf-w-1/2 wf-order-first md:wf-order-last wf-inline-flex wf-justify-end wf-h-screen wf-overflow-hidden wf-will-change-transform wf-cursor-grab wf-bg-repeat wf-text-yellow-50 slider-container"  style="background-image: url('../../../src/assets/img/bg/home-wallet-shapes-bg.png'); transform: translateX(0);">
                <div class="wf-ml-auto slide wf-flex wf-justify-center wf-items-center wf-w-screen wf-max-h-screen">
                    <img src="@/assets/img/tools/wallet-buy.png" class="wf-object-cover">
                </div>
                <div class="wf-ml-aut slide">
                    <img src="@/assets/img/tools/wallet-buy.png" class="wf-object-cover">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import DropDownSummaryList from './DropDownSummaryList.vue'
    import { onMounted } from 'vue'
    import { ref } from 'vue';

    const props = defineProps<{
        readonly features: any
        readonly header: string,
        readonly headerIcon: any
    }>();
    
    const current_id = ref(null);
    function toggleFeature(id: any) {
        current_id.value = id;
    }
</script>


<style scoped>
    .slide img{
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.grabbing {
  cursor: grabbing;
}

.grabbing .slide img{
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

</style>