<template>
    <div class="wf-flex wf-flex-col wf-items-center wf-w-full">
        <form ref="fileform" class="wf-w-full wf-mb-5">
            <label class="wf-flex wf-flex-col wf-justify-center wf-items-center wf-h-44 wf-w-full wf-bg-yellow-200 wf-rounded-xl wf-border-2 wf-border-dashed wf-border-yellow-700 wf-cursor-pointer" for="file">
                <PhotographIcon class="wf-w-14 wf-h-14 wf-text-yellow-700 wf-mb-3" />
                <h4 class="wf-text-yellow-700 wf-text-base wf-font-bold wf-hidden md:wf-block">
                    Drag and Drop your profile picture here
                </h4>
                <h4 class="wf-text-yellow-700 wf-text-base wf-font-bold md:wf-hidden">
                    Upload file
                </h4>
            </label>
            <input type="file" class="wf-hidden" id="file" @change="uploadFile" ref="fileInput">
        </form>
        <template v-if="multiple">
            <div v-for="(file, key) in files" :key="key" class="">
                <img :ref="el => { imgs[key] = el }">
            </div>
        </template>
        <label for="file" class="wf-w-24 wf-h-24 wf-bg-gray-200 wf-rounded-full wf-flex wf-justify-center wf-items-center wf-ring wf-ring-yellow-600" v-if="!multiple && files.length">
            <img :ref="el => { imgs[0] = el }" class="wf-bg-cover wf-w-full wf-h-full wf-rounded-full">
        </label>
    </div>
</template>

<script setup lang="ts">
    import { PhotographIcon } from '@heroicons/vue/solid';
    import { ref, onMounted, nextTick } from 'vue';

    const props = defineProps<{multiple, type}>();
    console.log(props.type, 'aboki.jpg'.endsWith('.jpg'))
    const dragAndDropCapable = ref(false);
    const files = ref([]);
    const imgs = ref([]);
    const fileInput = ref(null);
    const fileform = ref(null);

    function uploadFile() {
        files.value[0] = fileInput.value.files[0];
        getImagePreviews();
    }
    function determineDragAndDropCapable() {
        let div =  document.createElement('div');
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
    }
    function getImagePreviews() {
        console.log(files.value)
        for(let i = 0; i < files.value.length; i++) {
            let fileIsSupported = false;
            type:
            for(let j = 0; j < props.type.length; j++) {
                console.log(files.value[i].name.toLowerCase().endsWith(props.type[j]), files.value[i].name)
                if(files.value[i].name.toLowerCase().endsWith(props.type[j])) {
                    fileIsSupported = true;
                    break type;
                }
            }
            if(fileIsSupported) {
                if(/.(jpe?g|gif|png)$/i.test(files.value[i].name)) {
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
                
            } else {
                alert('unsupported file format')
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
                if( (!props.multiple && e.dataTransfer.files.length > 1) || !props.multiple && files.value.length) {
                    files.value[0] = e.dataTransfer.files[0]
                    getImagePreviews();
                    fileInput.value.value = null;
                    return;
                }
                for(let i = 0; i < e.dataTransfer.files.length; i++) {
                    files.value.push(e.dataTransfer.files[i])
                }

                getImagePreviews();
                fileInput.value.value = null;
            })
        }
    })
</script>