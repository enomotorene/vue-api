import Vue from 'vue'
import VueRouter from 'vue-router'
//import Skills from './components/Skills.vue'

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
        },
        {
            path: '/modals',
            name: 'Modals',
            component: load('Modals')
        },
        {
            path: '/school',
            name: 'School',
            component: load('School')
        },
        {
            path: '/graduate',
            name: 'Graduate',
            component: load('Graduate')
        },
        {
            path: '/sukimatch',
            name: 'Sukimatch',
            component: load('Sukimatch')
        }
    ]
})

export default router