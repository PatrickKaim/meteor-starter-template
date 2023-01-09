<template>
    <!-- Profile details -->
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="profile-details-heading">
            <PersonalProfileDetailsForm />
        </section>
    </div>
</template>

<script>
import PersonalProfileDetailsForm from "./PersonalProfileDetailsForm.vue";

export default {
    name: "PersonalProfileView",
    components: {PersonalProfileDetailsForm}
}
</script>