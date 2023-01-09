<template>
    <form v-on:submit.prevent="processForm">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                    <h2 id="profile-details-heading" class="text-lg font-medium leading-6 text-gray-900">Profile details</h2>
                    <p class="mt-1 text-sm text-gray-500">Update your profile information.</p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                    <BaseInput :model-value="user.profile.givenName" label="Given name" id="givenName" type="text" autocomplete="given-name" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="user.profile.familyName" label="Family name" id="familyName" type="text" autocomplete="family-name" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="user.profile.username" label="Username" id="username" type="text" autocomplete="username" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="user.emails[0].address" label="Email address" id="email-address" type="email" autocomplete="email" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="personal.location" label="ZIP / Postal code" id="postal-code" type="text" autocomplete="postal-code" div-class="col-span-4 sm:col-span-2" />
                    <BaseDropdown label="Country" id="country" type="text" autocomplete="country-name" :options="countryOptions" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="personal.location.street" label="Street address" id="street-address" type="text" autocomplete="street-address" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="personal.location.city" label="City / Town" id="address-level2" type="text" autocomplete="address-level2" div-class="col-span-4 sm:col-span-2" />
                    <BaseAvatarUploader label="Profile Image / Avatar" id="avatarUploader" div-class="col-span-8 sm:col-span-4 pl-3" />
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">Save</button>
            </div>
        </div>
    </form>
</template>

<script>
import {ref} from "vue";
import BaseInput from "../../../../components/formItems/BaseInput.vue";
import BaseDropdown from "../../../../components/formItems/BaseDropdown.vue";
import BaseAvatarUploader from "../../../../components/formItems/BaseAvatarUploader.vue";
import {NotificationsCollection} from "../../../../../api/notifications";
import {PersonalCollection} from "../../../../../api/personal";

export default {
    name: "PersonalProfileDetailsForm",
    components: {
        BaseAvatarUploader,
        BaseDropdown,
        BaseInput
    },
    methods: {
        processForm(event) {
            this.isProcessing = true
            console.log('save')
        }
    },
    meteor: {
        user() {
            return Meteor.user();
        },
        personal() {
            return PersonalCollection.find();
        }
    },
    setup() {
        const isProcessing = ref(false);
        const countryOptions = ref([
            {label: 'Netherlands', value: 'NL'},
            {label: 'Belgium', value: 'BE'}
        ]);
        const givenName = ref('');
        const familyName = ref('');
        const username = ref('');
        const email = ref('');
        const postalCode = ref('');
        const country = ref('');
        return {
            isProcessing, countryOptions, givenName, familyName, username, email, postalCode, country
        }
    },
    created() {

    }
}
</script>