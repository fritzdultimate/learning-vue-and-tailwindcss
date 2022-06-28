<template>
    <form ref="fileform">
        <div class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-h-44 wf-w-full wf-bg-yellow-200 wf-rounded-xl wf-border-2 wf-border-dashed wf-border-yellow-700 wf-cursor-pointer">
            <PhotographIcon class="wf-w-14 wf-h-14 wf-text-yellow-700 wf-mb-3" />
            <h4 class="wf-text-yellow-700 wf-text-base wf-font-bold">
                Drag and Drop your profile picture here
            </h4>
        </div>
    </form>
    <div v-for="(file, key) in files" :key="key" class="">
        <img :ref="el => { imgs[key] = el }">
        {{ file.name }}
    </div>
</template>

<script setup lang="ts">
    import { PhotographIcon } from '@heroicons/vue/solid';
    import { ref, onMounted, nextTick } from 'vue';

    const dragAndDropCapable = ref(false);
    const files = ref([]);
    const imgs = ref([]);
    const fileform = ref(null);
    function determineDragAndDropCapable() {
        let div =  document.createElement('div');
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
    }
    function getImagePreviews() {
        console.log(files.value)
        for(let i = 0; i < files.value.length; i++) {
            console.log('for')
            if(/.(jpe?g|png|gif)$/i.test(files.value[i].name)) {
                let reader = new FileReader();

                reader.addEventListener('load', () => {
                    console.log(imgs.value)
                    imgs.value[i].src = reader.result
                })
                reader.readAsDataURL(files.value[i]);
            } else {
                nextTick(() => {
                    // imgs.value[i][0].src = '/path/to/default/img'
                })
            }
        }
    }
    onMounted(()=> {
        dragAndDropCapable.value = determineDragAndDropCapable();

        if(dragAndDropCapable.value) {
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(evt => {
                fileform.value.addEventListener(evt, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                })
            })

            fileform.value.addEventListener('drop', (e) => {
                for(let i = 0; i < e.dataTransfer.files.length; i++) {
                    files.value.push(e.dataTransfer.files[i])
                }

                getImagePreviews();
            })
        }
    })
</script>