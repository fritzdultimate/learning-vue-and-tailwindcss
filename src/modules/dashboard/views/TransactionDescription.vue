<template>
    <ViewWrapper>
        <TransactionDetailsCard :details="details"/>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import TransactionDetailsCard from '../../../common/components/Cards/TransactionDetailsCard.vue';
    import { CheckCircleIcon, ClockIcon } from '@heroicons/vue/solid'

    const details = [
        {
            title: 'Transaction Hash',
            value: '0x20678936448eb484945940cae84940988499840393',
            copy: true,
            info: 'this is hash',
            color: 'wf-text-gray-600'
        },
        {
            title: 'status',
            value: 'Success',
            copy: false,
            info: 'this is hash',
            preIcon: CheckCircleIcon,
            color: 'wf-text-green-600'
        },
        {
            title: 'block',
            value: '13190954',
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-600',
            link: true,
            to: '#',
            subvalue: '242 Block Confirmations',
            tagged: true
        },
        {
            title: 'timestamp',
            value: '55 mins ago (Sep-09-2021 10:20:35 AM +UTC)',
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-600',
            preIcon: ClockIcon
        },
        {
            title: 'from',
            value: '0x7f10f0fee45f09f7950ae039f10f1258e09',
            copy: true,
            info: 'this is hash',
            color: 'wf-text-gray-600',
            link: true,
            to: '#',
        },
        {
            title: 'to',
            value: '0x7f10f0fee45f09f7950ae039f10f1258e09',
            copy: true,
            info: 'this is hash',
            color: 'wf-text-gray-600',
            link: true,
            to: '#',
        },
        {
            title: 'value',
            value: '0.727456836393 Ether',
            valuePad: true,
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-800',
            amount: '$2,534.92'
        },
        {
            title: 'transaction fee',
            value: '0.727456836393 Ether',
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-600',
            fee: '$8.09'
        },

        {
            title: 'gas price',
            value: '0.727456836393 Ether',
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-500',
            subvalue: '110.522334748 Gwei'
        },
        {
            title: 'txn type',
            value: '2',
            copy: false,
            info: 'this is hash',
            color: 'wf-text-gray-500',
            subvalue: 'EIP-1559'
        }
    ]
</script>