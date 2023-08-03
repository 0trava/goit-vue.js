<template>
    <form class="form" @submit.prevent="handleSubmit">
        <div class="form__block">
        <CustomSelect :items="cities" v-model="city" class="form__select"/>
        <CustomInput
        v-model="price"
        placeholder="Price from $"
        error-message="Must not be empty"
        :rules="rules"
      />
        </div>

        <SubmitButton 
        class="form__btn"
        type="submit">
            Find House
        </SubmitButton>

    </form>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue'
import CustomSelect from '../shared/CustomSelect.vue'
import SubmitButton from '../Button.vue'

    export default {
        name: "ApartmantFilterForm",
        components: {
            CustomInput,
            CustomSelect,
            SubmitButton,
        },
        computed: {
    // rules() {
    //   return [isRequired, charLimit(10)];
    // },
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', 'form submited')
        }
    }
  },
    }
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: space-between;
  
    &__select {
      margin-right: 30px;
    }
  
    &__submit {
      margin-left: auto;
    }
.form__block {
    display: flex;
}
  }
</style>