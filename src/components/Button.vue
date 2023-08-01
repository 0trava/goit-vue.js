<template>
    <button v-bind:type="type" class="btn btn--outlined">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'TheButton',
        props: {
            type: {
                type: String, 
                default: 'button',
            },
            outlined: {
                type: Boolean,
                default: false
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    font-size: 18px;
    background: #ff662d;
    color: #fff;
    cursor: pointer;
    min-width: 220px;
    border: 1px solid transparent;
    padding: 8px 15px;

    &--outlined {
        background: #fff;
        color: #ff662d;
        border: 1px solid #ff662d;        
    }

}



</style>