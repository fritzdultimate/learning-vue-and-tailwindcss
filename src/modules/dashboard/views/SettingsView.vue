<template>
    <ViewWrapper :visibleHeader="false">
        <div>Settings</div>
    </ViewWrapper>
</template>

<script setup lang="ts">
import ViewWrapper from '../partials/ViewWrapper.vue';
import { onBeforeMount, onMounted } from 'vue';
import topbar from '../../../plugins/topbar';

onBeforeMount(() => topbar.show())
onMounted(() => topbar.hide())

</script>