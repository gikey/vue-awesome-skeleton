import Skeleton from '~/components/skeleton'
import SkeletonText from '~/components/skeletonText'
import SkeletonHeading from '~/components/skeletonHeading'
import SkeletonImg from '~/components/skeletonImg'
import '~/style.scss';

const SkeletonComponent = {
    install(Vue) {
        Vue.component('Skeleton', Skeleton)
        Vue.component('SkeletonText', SkeletonText)
        Vue.component('SkeletonHeading', SkeletonHeading)
        Vue.component('SkeletonImg', SkeletonImg)
    }
}

export {
    Skeleton,
    SkeletonText,
    SkeletonHeading,
    SkeletonImg
}

export default SkeletonComponent


let Vue = null
if(typeof window !== 'undefined') {
    Vue = window.Vue
} else if(typeof global !== 'undefined') {
    Vue = global.Vue
}
Vue && Vue.use(SkeletonComponent)