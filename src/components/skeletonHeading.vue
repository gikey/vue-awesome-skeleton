<template>
    <div class="skeleton-heading">
        <div class="skeleton-heading-img" :class="{'rounded': imgRounded}" v-if="img"></div>
        <div class="skeleton-heading-content">
            <div class="skeleton-heading-title"></div>
            <div class="skeleton-heading-subtitle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkeletonHeading',
    props: {
        img: {
            type: Boolean,
            default: true
        },
        imgRounded: {
            type: Boolean,
            default: false
        }
    }
}
</script>
