<script setup lang="ts">
    import { onBeforeMount, onMounted } from 'vue';
    import topbar from '../../../plugins/topbar';

    onBeforeMount(() => topbar.show())
    onMounted(() => topbar.hide())
</script>