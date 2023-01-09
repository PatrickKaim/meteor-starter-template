<template>
    <!-- Replace with your content -->
    <div class="px-4 py-4 sm:px-0">
        <div class="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <h1 class="text-3xl font-bold m-6">Signing out...</h1>
        </div>
    </div>
    <!-- /End replace -->
</template>

<script>
import {router} from "../../router";

export default {
    name: "SignOutView",
    created() {
        console.log('Signing out')
        Meteor.logout((err, res) => {
            if (err) {
                alert(err);
            } else {
                router.push({name: 'Home'});
            }
        })
    }
}
</script>