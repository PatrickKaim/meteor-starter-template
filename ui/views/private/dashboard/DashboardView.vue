<template>
    <!-- Replace with your content -->
    <div class="px-4 py-4 sm:px-0">
        <div class="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <h1 class="text-3xl font-bold m-6">Welcome {{ username }}!</h1>
            <p>{{ $t('hello') }}</p>
            <button @click="CreateNotification" class="bg-green-600 text-white border-2 rounded-md p-3 m-6">Create Notification</button>
        </div>
    </div>
    <!-- /End replace -->
</template>

<script>
export default {
    name: "Dashboard",
    computed: {
        username() {
            try {
                return this.user.profile.name;
            } catch {
                return 'n.a.'
            }
        }
    },
    meteor: {
        userId() {
            return Meteor.userId()
        },
        user() {
            return Meteor.user()
        }
    },
    methods: {
        CreateNotification() {
            Meteor.call('AddNotification', {
                stored: false,
                type: 'info',
                title: 'Test',
                text: 'Just a placeholder to see if the notification system works',
                userId: Meteor.userId()
            }, (err, res) => {
                if (err) {
                    alert('Error: ' + err);
                }
                if (res) {
                    console.log("RES: " + JSON.stringify(res));
                }
            });
        }
    }
}
</script>