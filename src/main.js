import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import persistentState from 'vue-persistent-state'

let initialState = {
    $heroes: [
        {id: 1, name: 'Katsu', points: 0},
        {id: 2, name: 'Bravo', points: 0},
        {id: 3, name: 'Dorinthea', points: 0},
        {id: 4, name: 'Rhinar', points: 0},
        {id: 5, name: 'Viserai', points: 0},
        {id: 6, name: 'Dash', points: 0},
        {id: 7, name: 'Kano', points: 0},
        {id: 8, name: 'Azalea', points: 0},
        {id: 9, name: 'Benji', points: 0},
        {id: 10, name: 'Kavdaen', points: 0},
        {id: 11, name: 'Data Doll', points: 0},
        {id: 12, name: 'Ira', points: 0},
        {id: 13, name: 'Kayo', points: 0},
        {id: 14, name: 'Kassai', points: 0},
        {id: 15, name: 'Chane', points: 0},
        {id: 16, name: 'Prism', points: 0},
        {id: 17, name: 'Boltyn', points: 0},
        {id: 18, name: 'Levia', points: 0},
        {id: 19, name: 'Lexi', points: 0},
        {id: 20, name: 'Oldhim', points: 0},
        {id: 21, name: 'Briar', points: 0},
        {id: 22, name: 'Valda', points: 0},
        {id: 23, name: 'Shiyana', points: 0},
    ],
    $currentQuestion: 0
}

Vue.use(persistentState, initialState)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
