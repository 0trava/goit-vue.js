<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'TheButton',
        props: {
            type: String
        }
        
    }
</script>

<style lang="scss" scoped>

</style>