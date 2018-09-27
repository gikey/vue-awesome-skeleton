<template>
    <div :class="classObj">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'Skeleton',
    props: {
        animated: {
            type: Boolean,
            default: true
        },
        rounded: {
            type: Boolean,
            default: false
        },
        centered: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classObj() {
            return {
                'skeleton': true,
                'skeleton-animation': this.animated,
                'skeleton-rounded': this.rounded,
                'skeleton-centered': this.centered
            }
        }
    }
}
</script>

