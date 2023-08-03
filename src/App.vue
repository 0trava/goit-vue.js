<template>
  <div >
    <Container class="container__ApartmantFilterForm">
      <ApartmantFilterForm
        @submit="logger"
      />
    </Container>

    <ApartmentList :items="apartments">
      <template v-slot:title>New Title</template>
      

    </ApartmentList>
  </div>
</template>



<script>
import ApartmentList from './components/apartment/ApartmentList.vue'
import ApartmantFilterForm from './components/apartment/ApartmantFilterForm.vue'
import apartments from './components/apartment/apartments'
import Container from './components/shared/Container.vue'



export default {
  name: 'App',
  components: {
    ApartmentList,
    ApartmantFilterForm,
    Container,

  },
  data() {
    return {
      apartments,
    }
  },
  methods: {
    logger(value){
      console.log(value, '---form value')
    },
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

.container__ApartmantFilterForm {
  display: block;
  align-items: center;
  justify-content: center;
  align-items: center;
}
</style>
