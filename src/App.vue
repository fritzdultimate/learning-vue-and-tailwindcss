<script setup lang="ts">
    import { useServer } from './composables/server.js'
    
    const serverUrl = 'https://zqqlc9enecak.usemoralis.com:2053/server';
    const appId = '71OxWlUqGzRnbphLQRhv8UEWzYlC6WalG7C3e5Fp';
    useServer(serverUrl, appId);

</script>

<template>
  <!-- <div id="app" class="wf-h-full"> -->
    <AppLayout>
        <router-view />
    </AppLayout>
  <!-- </div> -->
</template>
