import Vue from 'vue'
import App from './App'
// import skeletonPlugin from '../src/vue-awesome-skeleton'
import skeletonPlugin from '../dist/vue-awesome-skeleton'

Vue.config.productionTip = false
Vue.use(skeletonPlugin)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})