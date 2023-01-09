<template>
        <main class="mx-auto max-w-7xl pb-10 lg:py-8 lg:px-8">
            <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <aside class="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
                    <PersonalProfileMenu />
                </aside>
                <router-view />
            </div>
        </main>
</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import PersonalProfileMenu from "./PersonalProfileMenu.vue";
import PaymentDetailsForm from "./planAndBilling/PaymentDetailsForm.vue";
export default {
    name: "PersonalProfileIndex",
    components: {
        PaymentDetailsForm,
        PersonalProfileMenu,
        Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,
        MagnifyingGlassIcon,
        Bars3Icon, XMarkIcon
    }
}
</script>