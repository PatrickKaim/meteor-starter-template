import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/public/HomeView.vue'
import SignInView from "./views/auth/SignInView.vue";
import SignUpView from "./views/auth/SignUpView.vue";
import RequestTokenView from "./views/auth/RequestTokenView.vue";
import Dashboard from "./views/private/dashboard/DashboardView.vue";
import SignOutView from "./views/public/SignOutView.vue";
import PersonalProfileIndex from "./views/private/personalProfile/PersonalProfileIndex.vue";
import PlanAndBillingView from "./views/private/personalProfile/planAndBilling/PlanAndBillingView.vue";
import PersonalAccountView from "./views/private/personalProfile/account/PersonalAccountView.vue";
import PersonalProfileView from "./views/private/personalProfile/profile/PersonalProfileView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '/sign-up', name: 'Sign Up', component: SignUpView },
        { path: '/request-token', name: 'Request Token', component: RequestTokenView },
        { path: '/sign-in', name: 'Sign In', component: SignInView },
        { path: '/sign-out', name: 'Sign Out', component: SignOutView },
        { path: '/personal-profile', name: 'Personal Profile Index', component: PersonalProfileIndex, children: [
                { path: '/personal-profile/', name: 'Personal Profile', component: PersonalProfileView },
                { path: '/personal-profile/account', name: 'Personal Account', component: PersonalAccountView },
                { path: '/personal-profile/plan-and-billing', name: 'Plan and Billing', component: PlanAndBillingView },
            ]},
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ],
})
