<template>
    <div class="wf-flex wf-flex-col">
        <div class="wf-flex wf-items-center wf-mb-5">
            <span class="wf-p-1 hover:wf-bg-gray-100 wf-rounded-md">
                <XIcon class="wf-w-6 md:wf-w-8 wf-h-6 md:wf-h-8 wf-text-gray-700" />
            </span>
            <span class="wf-mx-auto wf-text-gray-800 wf-font-bold wf-text-base md:wf-text-xl wf-capitalize">
                transaction {{ type }}
            </span>
        </div>
        <div class="wf-flex wf-justify-center wf-items-start wf-mb-5 wf-h-48">
            <figure class="wf-flex-shrink-0 wf-h-full">
                <img src="../../../assets/img/tools/space-success.gif" class="wf-bg-cover wf-h-full">
            </figure>
        </div>

        <div class="wf-flex wf-flex-col wf-items-center wf-mb-8">
            <h2 class="wf-font-bold wf-text-4xl wf-mb-1">${{ amount }}</h2>
            <h3 class="wf-uppercase wf-text-base wf-text-gray-600 wf-font-bold wf-mb-2">{{ coinValue }} {{ coin }}</h3>
            <p class="wf-text-sm wf-font-medium wf-text-gray-800">
                {{ msg }}
            </p>
            <p class="wf-text-sm wf-font-bold wf-text-gray-800">{{ receiver }}</p>
        </div>

        <p v-if="type == 'successful'" class="wf-text-gray-500 wf-font-medium wf-text-sm wf-text-center wf-mb-3">
            {{ coinValue }} ETH ${{ amount }} will appear in your wallet history which includes added transaction fees.
        </p>

        <p v-if="type == 'failed'" class="wf-text-red-700 wf-font-medium wf-text-sm wf-text-center wf-mb-3">
            {{ coinValue }} ETH ${{ amount }} will not be debited from your wallet.
        </p>

        <button class="wf-text-white wf-bg-yellow-600 wf-w-full wf-rounded-lg wf-mt-5 wf-py-3 wf-font-medium wf-text-base md:wf-text-xl wf-capitalize wf-shadow hover:wf-bg-yellow-700 hover:wf-ring hover:wf-ring-yellow-600 hover:wf-text-gray-100 wf-transition wf-duration-300">Done</button>
    </div>
</template>

<script setup lang="ts">
    import { XIcon } from '@heroicons/vue/outline';

    interface Props {
        type
        img?
        amount
        coin
        coinValue
        receiver
        msg
    }

    defineProps<Props>();
</script>