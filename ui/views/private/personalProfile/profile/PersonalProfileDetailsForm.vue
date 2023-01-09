<template>
    <form v-on:submit.prevent="processForm">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                    <h2 id="profile-details-heading" class="text-lg font-medium leading-6 text-gray-900">Profile details</h2>
                    <p class="mt-1 text-sm text-gray-500">Update your profile information.</p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                    <BaseInput :model-value="givenName" label="Given name" id="givenName" type="text" autocomplete="given-name" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="familyName" label="Family name" id="familyName" type="text" autocomplete="family-name" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="username" label="Username" id="username" type="text" autocomplete="username" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="emailAddress" label="Email address" id="email-address" type="email" autocomplete="email" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="postalCode" label="ZIP / Postal code" id="postal-code" type="text" autocomplete="postal-code" div-class="col-span-4 sm:col-span-2" />
                    <!-- Todo: create a working dropdown component, because all options thus far result in an error
                    <BaseDropdown :model-value="country" label="Country" id="country" type="text" autocomplete="country-name" :options="countryOptions" div-class="col-span-4 sm:col-span-2" />
                    -->
                    <BaseInput :model-value="country" label="Country" id="country" type="text" autocomplete="country-code" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="address" label="Street address" id="street-address" type="text" autocomplete="street-address" div-class="col-span-4 sm:col-span-2" />
                    <BaseInput :model-value="city" label="City / Town" id="address-level2" type="text" autocomplete="address-level2" div-class="col-span-4 sm:col-span-2" />
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
    computed: {
        givenName() {
            if (this.user) {
                return this.user.profile.givenName;
            } else {
                return '';
            }
        },
        familyName() {
            if (this.user) {
                return this.user.profile.familyName;
            } else {
                return '';
            }
        },
        username() {
            if (this.user) {
                return this.user.profile.username;
            } else {
                return '';
            }
        },
        emailAddress() {
            if (this.user) {
                return this.user.emails[0].address;
            } else {
                return '';
            }
        },
        address() {
            if (this.personal !== '') {
                return this.personal.location.address;
            } else {
                return '';
            }
        },
        postalCode() {
            if (this.personal !== '') {
                return this.personal.location.postalCode;
            } else {
                return '';
            }
        },
        city() {
            if (this.personal !== '') {
                return this.personal.location.city;
            } else {
                return '';
            }
        },
        country() {
            if (this.personal !== '') {
                return this.personal.location.country;
            } else {
                return 'NL';
            }
        }
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
            let pc = PersonalCollection.find();
            if (pc.count() > 0) {
                return pc.fetch();
            } else {
                return '';
            }
        }
    },
    setup() {
        const isProcessing = ref(false);
        const countryOptions = ref([
            {label: 'Netherlands', value: 'NL'},
            {label: 'Belgium', value: 'BE'}
        ]);
        return {
            isProcessing, countryOptions
        }
    },
    created() {

    }
}
</script>