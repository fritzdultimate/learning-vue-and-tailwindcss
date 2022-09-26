<template>
    <ViewWrapper :visibleHeader="false">
        <section class="wf-flex wf-flex-col wf-justify-center">
            <div class="wf-flex wf-items-center wf-h-5 wf-w-full wf-bg-red-600">
                <span class="wf-text-white wf-text-xs wf-font-medium wf-ml-3">Invoice expired</span>
            </div>

            <div class="wf-flex wf-flex-col wf-px-4">
                <h1 class="wf-font-bold wf-text-xl wf-text-gray-800 wf-mt-5">
                    What happened?
                </h1>
                <article class="wf-text-xs wf-text-gray-900 wf-font-medium">
                    <p class="wf-mt-5">
                        This invoice has expired. An invoice is only valid for 15 minutes. You can return to your dashboard if you would like to submit your payment again.
                    </p>

                    <p class="wf-mt-5">
                        if you tried to send a payment, it has not yet been accepted by the network. We have not yet received your funds.
                    </p>

                    <p class="wf-mt-5">
                        If we receive it at a later point, we will either process your order or contact you to make a refund arrangements...
                    </p>

                    <p class="wf-mt-5">
                        <span class="wf-mb-2 wf-block">
                            <strong>Invoice ID</strong>: 8JTJuiNXeLDtQ22f63GSVrA
                        </span>
                        <span class="wf-mt-2">
                            <strong>Transaction ID</strong>: 8JTJuiNXeLDtQ22f63GSVrA
                        </span>
                    </p>

                    <p class="wf-mt-10 wf-bg-blue-500 wf-text-white wf-px-3 wf-py-2">
                        <strong>Note</strong>: You can increase your account fund processing duration in your account settings. (Your account is currently set to 15 minutes)
                    </p>
                </article>
            </div>

            <div class="wf-flex wf-justify-center wf-mt-10">
                <ActionBtn class="wf-w-full wf-mx-10 wf-bg-green-600">View Transaction</ActionBtn>
            </div>
        </section>
    </ViewWrapper>
</template>

<script setup lang="ts">
import ActionBtn from '@/common/components/Form/ActionBtn.vue';
import ViewWrapper from '../partials/ViewWrapper.vue';
import { onBeforeMount, onMounted } from 'vue';
import topbar from '../../../plugins/topbar';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide())

</script>