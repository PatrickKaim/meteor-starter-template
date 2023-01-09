<template>
    <form v-on:submit.prevent="processForm">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                    <h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Payment details</h2>
                    <p class="mt-1 text-sm text-gray-500">Update your billing information. Please note that updating your location could affect your tax rates.</p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                    <div class="col-span-4 sm:col-span-2">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                        <input type="text" name="first-name" id="first-name" autocomplete="cc-given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                    </div>

                    <div class="col-span-4 sm:col-span-2">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                        <input type="text" name="last-name" id="last-name" autocomplete="cc-family-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                    </div>

                    <div class="col-span-4 sm:col-span-2">
                        <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                    </div>

                    <div class="col-span-4 sm:col-span-1">
                        <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expration date</label>
                        <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" placeholder="MM / YY" />
                    </div>

                    <div class="col-span-4 sm:col-span-1">
                        <label for="security-code" class="flex items-center text-sm font-medium text-gray-700">
                            <span>Security code</span>
                            <QuestionMarkCircleIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                        </label>
                        <input type="text" name="security-code" id="security-code" autocomplete="cc-csc" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                    </div>

                    <div class="col-span-4 sm:col-span-2">
                        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                        <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
                            <option>Nederland</option>
                            <option>België</option>
                        </select>
                    </div>

                    <div class="col-span-4 sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                    </div>
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
import {QuestionMarkCircleIcon} from "@heroicons/vue/20/solid";

export default {
    name: "PaymentDetailsForm",
    components: {
        QuestionMarkCircleIcon
    },
    methods: {
        processForm(event) {
            this.isProcessing = true;
        }
    },
    setup() {
        const isProcessing = ref(false);
        return {
            isProcessing
        }
    }
}
</script>