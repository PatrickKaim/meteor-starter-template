<template>
    <div class="min-h-full">
        <AppMenu />

        <header class="bg-white shadow-sm">
            <div class="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
                <h1 class="text-lg font-semibold leading-6 text-gray-900">{{ this.$route.name }}</h1>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <router-view />
            </div>
        </main>
    </div>
    <Notifications />
</template>

<script>
import AppMenu from "./AppMenu.vue";
import Notifications from "./Notifications.vue";

export default {
    components: {
        Notifications,
        AppMenu
    }
}
</script>
