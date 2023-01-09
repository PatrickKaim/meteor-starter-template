<template>
    <nav class="space-y-1">
        <router-link v-for="item in navigation" :key="item.name" :to="{name: item.route}" :class="[item.current ? 'bg-gray-50 text-orange-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
            <component :is="item.icon" :class="[item.current ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
            <span class="truncate">{{ item.name }}</span>
        </router-link>
    </nav>
</template>

<script>
import {CogIcon, CreditCardIcon, UserCircleIcon} from "@heroicons/vue/24/outline";

export default {
    name: "PersonalProfileMenu",
    setup() {
        const navigation = [
            { name: 'Profile', route: 'Personal Profile', icon: UserCircleIcon, current: true },
            { name: 'Plan & Billing', route: 'Plan and Billing', icon: CreditCardIcon, current: false },
        ]
        return {
            navigation
        }
    }
}
</script>