<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <router-link :to="{name: 'Request Token'}" class="font-medium text-indigo-600 hover:text-indigo-500">go to request token</router-link>
                </p>
            </div>
            <form v-on:submit.prevent="processForm" class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div>
                        <label for="token" class="sr-only">Token</label>
                        <input v-model="token" id="token" name="token" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Token" />
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import {ref} from "vue";
import {router} from "../../router";
export default {
    name: "SignInView",
    components: {
        LockClosedIcon
    },
    methods: {
        async processForm(event) {
            this.isProcessing = true;
            console.log('email: ' + this.email + ', token: ' + this.token);
            Meteor.passwordlessLoginWithToken({
                email: this.email
            }, this.token, (err) => {
                if (err) {
                    alert('Error: ' + err);
                }
                if (Meteor.userId()) {
                    router.push({name: 'Dashboard'})
                }
            });
        }
    },
    setup() {
        const isProcessing = ref(false);
        const token = ref('');
        const email = ref('');
        return {
            isProcessing, token, email
        }
    }
}
</script>