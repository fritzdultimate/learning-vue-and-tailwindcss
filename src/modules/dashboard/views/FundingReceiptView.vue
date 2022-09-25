<template>
    <ViewWrapper>
        <div class="wf-h-4 wf-w-full wf-bg-green-600"></div>
    </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import MobileKeyPad from '../../../common/components/Cards/MobileKeyPad.vue';
import { onBeforeMount, onMounted, ref, watch, reactive, customRef, computed } from 'vue';
import topbar from '../../../plugins/topbar';
import { ChevronDownIcon, ChevronRightIcon, BackspaceIcon } from '@heroicons/vue/solid';
import { SwitchVerticalIcon, DotsHorizontalIcon } from '@heroicons/vue/outline';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide())

</script>