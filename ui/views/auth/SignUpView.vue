<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up for a new account</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">request a token (existing users only)</a>
                </p>
            </div>
            <form v-on:submit.prevent="processForm" class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="given-name" class="sr-only">Given name</label>
                        <input v-model="givenName" id="given-name" name="given-name" type="text" autocomplete="given-name" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Given name" />
                    </div>
                    <div>
                        <label for="family-name" class="sr-only">Family name</label>
                        <input v-model="familyName" id="family-name" name="family-name" type="text" autocomplete="family-name" required="" class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Family name" />
                    </div>
                    <div>
                        <label for="username" class="sr-only">Username</label>
                        <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="" class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Username" />
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input v-model="email" id="email-address" name="email-address" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email-address" />
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Sign Up
                    </button>
                </div>
                <div>
                    <router-link :to="{name: 'Home'}" class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <XCircleIcon class="h-5 w-5 text-gray-200 group-hover:text-gray-300" aria-hidden="true" />
                        </span>
                        Cancel
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { LockClosedIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import {ref} from "vue";

export default {
    name: "SignUpView",
    components: {
        LockClosedIcon, XCircleIcon
    },
    methods: {
        async processForm(event) {
            this.isProcessing = true;
            const extra = {};
            const userData = {
                profile: {
                    username: this.username,
                    name: this.givenName + ' ' + this.familyName,
                    givenName: this.givenName,
                    familyName: this.familyName
                }
            }
            await Accounts.requestLoginTokenForUser({
                selector: { email: this.email },
                userData: { email: this.email, ...userData },
                options: { extra }
            }, (err, { isNewUser }) => {
                if (err) {
                    alert('Error: ' + err);
                } else {
                    if (isNewUser) {
                        console.log('New User!!')
                    }
                    console.log('Done')
                }

            })
        }
    },
    setup() {
        const isProcessing = ref(false);
        const givenName = ref('');
        const familyName = ref('');
        const username = ref('');
        const email = ref('');
        return {
            isProcessing, givenName, familyName, username, email
        }
    }
}
</script>