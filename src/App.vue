<template>
  <div >
    <ApartmentList :items="apartments">
      <template v-slot:title>New Title</template>
    </ApartmentList>
  </div>
</template>



<script>
import ApartmentList from './components/apartment/ApartmentList.vue'
import apartments from './components/apartment/apartments'



export default {
  name: 'App',
  components: {
    ApartmentList,
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
