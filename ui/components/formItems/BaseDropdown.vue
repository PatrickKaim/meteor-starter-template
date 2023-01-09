<template>
    <div class="border-none" :class="divClass">
        <label :for="id" class="block text-sm font-medium text-gray-700">
            {{ label }}
        </label>
        <select :id="id" v-bind="$attrs" v-model="selected" @change="$emit('update:modelValue', $event.target.value)" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
            <option disabled value="">Please Select</option>
            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "BaseDropdown",
    props: {
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        divClass: {
            type: String,
            default: 'col-span-4 sm:col-span-2'
        }
    },
    setup() {
        const selected = ref(this.props.modelValue);
        const options = ref([
            {label: 'Netherlands', value: 'NL'},
            {label: 'Belgium', value: 'BE'}
        ]);
        return {
            selected, options
        }
    }
}
</script>