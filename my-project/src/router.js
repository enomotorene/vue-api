import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (componentName) {
    return () => import(`@/components/${componentName}`)

}

const router = new VueRouter({
    mode: 'history', //seo frendly
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: load("Home")
        },
        {
            path: '/about',
            name: 'About',
            component: load('About')
        },
        {
            path: '/works',
            name: 'Works',
            component: load('Works')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: load('Contact')
        },
        {
            path: '/signin',
            name: 'Signin',
            component: load('Signin')
        },
        {
            path: '/signup',
            name: 'Signup',
            component: load('Signup')
        }
    ]
})

export default router