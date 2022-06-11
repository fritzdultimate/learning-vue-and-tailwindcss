<template>
    <ViewWrapper>
        <div class="wf-flex wf-flex-col">
            <div class="wf-flex wf-items-center">
                <XIcon class="wf-w-8 wf-h-8 wf-text-gray-800 wf-cursor-pointer"/>
                <span class="wf-mx-auto wf-text-gray-900 wf-text-base wf-font-bold wf-capitalize">
                    send ethereum
                </span>
            </div>
            <div class="wf-flex wf-justify-center wf-mt-4 wf-ml-5 wf-mb-8">
                <span class="wf-w-5 wf-h-1 wf-bg-yellow-600 wf-rounded wf-mr-1"></span>
                <span class="wf-w-5 wf-h-1 wf-bg-gray-200 wf-rounded wf-mr-1"></span>
                <span class="wf-w-5 wf-h-1 wf-bg-gray-200 wf-rounded wf-mr-1"></span>
            </div>

            <div class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-mb-10">
                <span class="wf-text-5xl wf-text-yellow-600 wf-font-medium wf-mb-3 wf-truncate">
                    ${{ amount }}
                </span>
                <span class="wf-text-base wf-font-bold wf-text-gray-700 wf-uppercase">0.084 eth</span>
            </div>

            <div class="wf-flex wf-border wf-border-gray-200 wf-rounded-md wf-py-2">
                <figure class="wf-flex-shrink-0 wf-mr-3">
                    <!-- <img> -->
                </figure>
                <div class="wf-flex wf-flex-col">
                    <span class="wf-text-gray-700 wf-font-medium md:wf-text-base wf-text-sm wf-capitalize">
                        ethereum wallet balance
                    </span>
                    <span class="wf-flex wf-items-center">
                        <span class="wf-font-bold wf-mr-2 wf-text-gray-800 wf-text-xl">$1743.23</span>
                        <span class="wf-font-medium wf-uppercase wf-text-gray-500 wf-text-xs wf-align-middle">0.0541 eth</span>
                    </span>
                </div>
                <span class="wf-ml-auto wf-p-1 wf-bg-gray-200 wf-flex wf-justify-center wf-items-center wf-rounded wf-cursor-pointer wf-mr-2 wf-my-2">
                    <ChevronDownIcon class="wf-w-5 wf-h-5 wf-text-gray-900" />
                </span>
            </div>

            <div class="wf-mx-1 wf-mt-5 wf-mb-5">
                <MobileKeyPad :buttons="keypadButtons" v-model="amount"/>
            </div>

            <button class="wf-capitalize wf-bg-yellow-600 wf-py-3 wf-text-gray-100 wf-font-medium wf-text-base wf-rounded hover:wf-bg-yellow-700">continue</button>
        </div>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import MobileKeyPad from '../../../common/components/Cards/MobileKeyPad.vue';
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import { onBeforeMount, onMounted, ref } from 'vue';
    import topbar from '../../../plugins/topbar';
    import { XIcon, ChevronDownIcon } from '@heroicons/vue/solid';
    import { BackspaceIcon } from '@heroicons/vue/outline';

    onBeforeMount(() => topbar.show())
    onMounted(() => topbar.hide());

    let keypadNumbers = [1,2,3,4,5,6,7,8,9]
    let mappedDigit = [];
    for(let i = 0; i < keypadNumbers.length; i++) {
        mappedDigit.push({digit: keypadNumbers[i]})
    }

    let actionLine = [
        {
            digit: '.'
        },
        {
            digit: 0
        },
        {
            digit: 'c',
            action: 'del',
            icon: BackspaceIcon
        }
    ];
    const keypadButtons = [
        ...mappedDigit,
        ...actionLine
    ]
    const amount = ref('325.50');

    function validateNumber(e) {
        let ASCIICode = (e.which) ? e.which : e.keyCode;
        if(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57 ) && (ASCIICode != 46)) {
            console.log(ASCIICode)
            return false;
        }
        if(amount.value.indexOf('.') != -1 && ASCIICode == 46) return
        if(!amount.value.length && ASCIICode == 46) {
            amount.value += '0.';
            return;
        }
        amount.value += e.key;
        console.log(e);
        return true;
    }
</script>