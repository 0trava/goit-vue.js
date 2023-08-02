<template>
  <div >
    <ApartmentItem 
    :descr="apartment.descr"
    :price="apartment.price"
    :rating="apartment.rating"
    :imgSrc="apartment.imgUrl"/>
  </div>
</template>



<script>
import ApartmentItem from './components/apartment/ApartmentItem.vue'
import imgApartment1 from '../public/apartments/apartment-1.jpg'



export default {
  name: 'App',
  components: {
    ApartmentItem,
  },
  data() {
    return {
      apartment: {
        id: '5f689a2c09b16000e9a2f47b',
        title: 'Delectus et iste.',
        imgUrl: imgApartment1,
        descr: 'Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.',
        rating: 3,
        price: 1667,
        location: {
          city: 'Dnipro',
        },
        owner: {
          name: 'Bobbi',
          phone: '582-740-2926',
          email: 'Pete_Carter53@hotmail.com',
        },
      }
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
