import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
const routes= [
    {
        name: "MainPage",
        path: "/",
        component : () => import ("../views/MainPage.vue")
    },
    {
        name:"LoginPage",
        path: "/login",
        component : () => import("../views/LoginPage.vue")
    },
    {
        name:"RegisterPage",
        path: "/register",
        component : () => import("../views/RegisterPage.vue")
    },
    {
        name:"AccountPage",
        path: "/account",
        component : () => import("../views/AccountPage.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// router.beforeEach()

export default  router