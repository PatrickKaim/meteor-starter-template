<template>
    <!-- Payment details -->
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="payment-details-heading">
            <PaymentDetailsForm />
        </section>

        <!-- Plan -->
        <section aria-labelledby="plan-heading">
            <PlanForm />
        </section>

        <!-- Billing history -->
        <section aria-labelledby="billing-history-heading">
            <div class="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                <div class="px-4 sm:px-6">
                    <h2 id="billing-history-heading" class="text-lg font-medium leading-6 text-gray-900">Billing history</h2>
                </div>
                <div class="mt-6 flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div class="overflow-hidden border-t border-gray-200">
                                <BillingHistoryTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PlanForm from "./PlanForm.vue";
import PaymentDetailsForm from "./PaymentDetailsForm.vue";
import BillingHistoryTable from "./BillingHistoryTable.vue";
export default {
    name: "PlanAndBillingView",
    components: {
        BillingHistoryTable,
        PaymentDetailsForm, PlanForm
    }
}
</script>