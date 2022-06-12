<template>
    <div class="wf-mt-5 wf-flex wf-border-2 wf-border-dashed wf-h-16 md:wf-h-32 wf-rounded-xl wf-justify-center md:wf-justify-start md:wf-pl-5 wf-items-center wf-text-base wf-font-bold wf-capitalize wf-relative" :class="[bgColor, borderColor, textColor]">
        <component :is="icon" class="wf-w-6 md:wf-w-10 wf-h-6 md:wf-h-10 wf-mr-3" />
        <span class="md:wf-text-xl wf-relative wf-inline-block wf-px-2">
            <span class="wf-relative wf-text-whit">Invest on {{ item }}</span>
        </span>
        <div class="wf-absolute wf-top-0 wf-right-0 wf-mr-5 wf-hidden md:wf-block wf-py-2">
            <ListBox class="wf-w-48"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import  ListBox  from '../../../../common/components/Form/ListBox.vue'
    interface Props {
        item: string,
        icon: string,
        bgColor: {
            required: true, 
            type: string
        },
        borderColor: {
            required: true, 
            type: string
        },
        textColor: {
            required: true, 
            type: string
        }
    }

    defineProps<Props>();
</script>