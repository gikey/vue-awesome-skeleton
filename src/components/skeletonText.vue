<template>
    <div class="skeleton-text">
        <div class="skeleton-text-line" v-for="line in lines" :key="line"></div>
    </div>
</template>

<script>
export default {
    name: 'SkeletonText',
    props: {
        lines: {
            type: Number,
            default: 4
        }
    }
}
</script>
