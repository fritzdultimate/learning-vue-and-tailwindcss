<template>
    <div class="wf-w-full md:wf-w-1/4 wf-flex-row wf-shadow-xl wf-shadow-slate-900 wf-rounded wf-bg-black/50 wf-min-h-28 wf-m-2 md:wf-m-1 wf-flex">
        <div class="wf-block wf-p-3">
            <img :src="ticker.logo_url" class="wf-w-8 wf-h-8 wf-rounded-full wf-mb-3">
            <span class="wf-text-base wf-text-gray-500 wf-font-medium wf-mb-2 wf-capitalize">
                {{ ticker.name }}
            </span>
            <div class="wf-font-bold wf-text-xl wf-text-white">
                <span class="wf-uppercase">
                    usd
                </span>
                <span>{{ formatNumberToCurrency(Number(ticker.price).toFixed(2)) }}</span>
            </div>
        </div>
        <div class="wf-block wf-p-3 wf-ml-auto wf-pt-6">
            <ArrowSmUpIcon v-if="is_gain" class="wf-h-4 wf-w-4 wf-text-green-700 wf-font-bold wf-inline" />
            <ArrowSmDownIcon v-else class="wf-h-4 wf-w-4 wf-text-red-700 wf-font-bold wf-inline" />
            <!-- <span :class="{'wf-text-green-700' : is_gain, 'wf-text-red-700': !is_gain}" class="wf-font-bold wf-text-base">{{ calculateGain(ticker['1d'].price_change, ticker.price) }}%</span> -->
            <div class="wf-text-base wf-text-gray-700 wf-font-medium wf-uppercase wf-text-right wf-mt-8">
                {{ ticker.currency }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
    interface Props {
        readonly ticker: object
    }

    const ticker = toRefs(defineProps<Props>())
    console.log(ticker)

    import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/vue/solid';
    import numeral from 'numeral';
    import {ref} from 'vue';

    let is_gain = ref(false);
    function calculateGain(price_change, price) {
        let diff = (+price / (+price - +price_change)) - 1;
        let pct = diff * 100;
        is_gain.value = diff > 0;
        return pct.toFixed(2);
    }

    let formatNumberToCurrency = (money) => numeral(money).format('0,0.00')
</script>