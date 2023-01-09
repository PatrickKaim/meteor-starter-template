<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
            <!--
              `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
            -->
            <th scope="col" class="relative px-6 py-3 text-left text-sm font-medium text-gray-500">
                <span class="sr-only">View receipt</span>
            </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="payment in payments" :key="payment.id">
            <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                <time :datetime="payment.datetime">{{ payment.date }}</time>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{ payment.description }}</td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{ payment.amount }}</td>
            <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <a :href="payment.href" class="text-orange-600 hover:text-orange-900">View receipt</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "BillingHistoryTable",
    setup() {
        const payments = [
            {
                id: 1,
                date: '1/1/2020',
                datetime: '2020-01-01',
                description: 'Business Plan - Annual Billing',
                amount: 'CA$109.00',
                href: '#',
            },
            // More payments...
        ]
        return {
            payments
        }
    }
}
</script>