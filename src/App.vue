<template>
  <div >
    <CustomInput v-model="text"/>
    <CustomSelect :items="['select', 'name']"/>
    <ApartmentList :items="apartments">
      
      <template v-slot:title>New Title</template>

    </ApartmentList>
  </div>
</template>



<script>
import ApartmentList from './components/apartment/ApartmentList.vue'
import apartments from './components/apartment/apartments'
import CustomInput from './components/shared/CustomInput.vue'
import CustomSelect from './components/shared/CustomSelect.vue'


export default {
  name: 'App',
  components: {
    ApartmentList,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      apartments,
    }

  },
  
}
</script>



<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
