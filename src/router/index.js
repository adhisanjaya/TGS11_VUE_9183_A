import Vue from 'vue' 
import Router from 'vue-router' 

const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const LandingLayout = () => import('../components/landingLayout.vue')

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`) 
}
function loadLanding(view) {
    return () => import(`../components/landingContents/${view}.vue`)
}

const routes = [ 
    {
        path: '/',
        component: LandingLayout,
        children: [
            {
                name: 'LandingPage',
                path: '',
                component: loadLanding('landingPage')
            }
        ]
    },
    { 
        path: '/dashboard', 
        component: DashboardLayout, 
        children: [ 
            {

                name: 'login',
                path: '/login',
                component: loadView('login')

            },
            { 
                name: 'UserController', 
                path: '/dashboardContents/userController', 
                component: loadView('userController') 
            },
            { 
                name: 'SparepartController', 
                path: '/dashboardContents/sparepartController', 
                component: loadView('sparepartController') 
            }
        ] 
    }, 
] 
Vue.use(Router)

const router = new Router({mode: 'history', routes: routes}) 

export default router