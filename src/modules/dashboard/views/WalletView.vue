<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-flex-col wf-justify-center wf-items-center">
                <div class="wf-flex wf-items-center">
                    <span class="wf-text-gray-400 wf-text-2xl wf-font-medium wf-mt-3 wf-font-mono">$</span>
                    <span class="wf-text-gray-500 wf-text-5xl wf-font-bold">1087.90</span>
                </div>
                <div class="wf-flex wf-mt-3 wf-text-green-600 wf-font-medium wf-text-xl wf-mb-5">
                    <span class="wf-mr-3">+$1.03</span>
                    <span class="">0.03%</span>
                </div>

                <div class="wf-flex wf-w-full wf-justify-cente wf-mb-5">
                    <div class="wf-w-1/2 wf-pr-2">
                        <router-link to="#" class="wf-block wf-w-full wf-rounded-md wf-text-gray-200 wf-text-center wf-bg-green-700 wf-py-2 wf-font-medium">
                            Deposit
                        </router-link>
                    </div>
                    <div class="wf-w-1/2 wf-pl-2">
                        <router-link to="#" class="wf-block wf-w-full wf-rounded-md wf-text-gray-200 wf-text-center wf-bg-red-700 wf-py-2 wf-font-medium">
                            Send
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="wf-flex wf-flex-col">
                <div class="wf-flex wf-mb-3">
                    <span class="wf-text-gray-600 wf-text-base wf-font-medium wf-capitalize">
                        my tokens
                    </span>
                </div>
                <ListTileWrapper>
                    <ListTile v-for="i in 51" :key="i" :item="'Bitcoin'" :amount="669.15" :bgColor="'wf-bg-gray-200'" :color="'wf-text-gray-800'" class="wf-mb-2 wf-rounded-md md:wf-w-[calc(50%-20px)] md:wf-mr-4"></ListTile>
                </ListTileWrapper>
            </div>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import ListTile from '../../../common/components/list/ListTile.vue';
    import ListTileWrapper from '../../../common/components/list/ListTileWrapper.vue';
    import { onBeforeMount, onMounted, ref } from 'vue';
    import topbar from '../../../plugins/topbar';

    onBeforeMount(() => topbar.show())
    onMounted(() => topbar.hide())
</script>