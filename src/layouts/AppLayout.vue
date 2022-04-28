<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault.vue'
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AppLayout',
  setup() {
    const layout = shallowRef(AppLayoutDefault)
    const route = useRoute()
    watch(
      () => route.meta,
      async meta => {
        try {
          console.log(meta.layout)
          const component = meta.layout ? import(`./${meta.layout}.vue`) : AppLayoutDefault;
          let AsyncComp;
          if(component != AppLayoutDefault) {
            console.log(3)
            AsyncComp = defineAsyncComponent(() => component );
          } else {
            AsyncComp = AppLayoutDefault;
          }
          console.log(AsyncComp)
          layout.value = AsyncComp || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault
        }
      },
      { immediate: true }
    )
    return { layout }
  }
}
</script>