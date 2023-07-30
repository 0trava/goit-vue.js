import Vue from 'vue'

const Button = Vue.component('Btn-work', {
    render(createElement) {
        return createElement('button', this.$slots.default)
    }
})

export default Button