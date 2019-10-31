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
            path: '/',
            name: 'Home',
            component: load("Home")
        },
        {
            path: '/about',
            name: 'About',
            component: load('About')
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