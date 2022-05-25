<template>
  <div class="">
        <main class="wf-h-full wf-containerm wf-w-full wf-m-auto" role="main">
            <HeaderComponent  class="md:wf-px-1 md:wf-pt-4"/>
            <slot />
            <FooterComponent  class="md:wf-px-1 md:wf-pt-4"/>
        </main>
  </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../common/components/layouts/HeaderComponent.vue';
    import FooterComponent from '../common/components/layouts/FooterComponent.vue';
</script>
