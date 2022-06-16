<template>
    <ViewWrapper>
        <TransactionStatus v-bind="report"/>
    </ViewWrapper>
</template>

<script setup lang="ts">
    import ViewWrapper from '../partials/ViewWrapper.vue';
    import TransactionStatus from '../../../common/components/Cards/TransactionStatus.vue';

    const report = {
        type: 'successful',
        img: '',
        amount: 3958.55,
        coin: 'eth',
        coinValue: 0.09,
        receiver: '32c2cae416ed2ca3fccb9a1772330eaf9',
        msg: 'You have successfully transferred the amount to'
    }
</script>