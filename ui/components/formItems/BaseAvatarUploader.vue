<template>
    <div class="border-none" :class="divClass">
        <label for="photo" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />
        <div class="mt-1 flex items-center gap-2">
            <span class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
            <button @click="$refs.fileInput.click()" type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Select File</button>
            <p>{{selectedFileName}}</p>
        </div>

    </div>
</template>

<script>
import {ref} from "vue";
import Avatars from "../../../api/files";


const imgConfig = {
    quality: 0.5,
    maxWidth: 200,
    maxHeight: 200,
    debug: true
}


export default {
    name: "BaseAvatarUploader",
    props: {
        id: {
            type:String,
            default: ''
        },
        label: {
            type:String,
            default: ''
        },
        divClass: {
            type:String,
            default: 'col-span-4 sm:col-span-2 pl-3'
        }
    },
    computed: {
        selectedFileName() {
            if (this.selectedFile !== null) {
                console.log('SF: ' + JSON.stringify(this.selectedFile))
                return this.selectedFile.name
            } else {
                return 'No file selected'
            }
        }
    },
    methods: {
        async onFileSelected(event) {
            try {
                const upload = Avatars.insert({
                    file: event.target.files[0]
                }, false);
                upload.start();
            } catch(err) {
                alert('Error: ' + err);
            }
        }
    },
    setup() {
        const selectedFile = ref(null)
        return {
            selectedFile
        }
    }
}
</script>