import { createRouter, createWebHashHistory } from "vue-router";
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
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default  router