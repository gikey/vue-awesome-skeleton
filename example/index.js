import Vue from 'vue'
import App from './App'
import SkeletonComponent from '../src/vue-awesome-skeleton'

Vue.config.productionTip = false
Vue.use(SkeletonComponent)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})