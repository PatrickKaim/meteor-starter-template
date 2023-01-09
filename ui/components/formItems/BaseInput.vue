<template>
    <div class="border-none" :class="divClass">
        <label :for="id" class="block text-sm font-medium text-gray-700">
            {{ label }}
        </label>
        <input :id="id" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"/>
    </div>
</template>

<script>
export default {
    name: "BaseInput",
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
    }
}
</script>