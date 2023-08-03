<template>
    <div class="apartment-list">
        <ApartmentItem 
        v-for="apartment in items"
        :key="apartment.id"
        :descr="apartment.descr"
        :price="apartment.price"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        />


    </div>
</template>

<script>
import ApartmentItem from './ApartmentItem.vue'
    export default {
        name: "ApartmentList",
        components: {
            ApartmentItem,
        },
        props: {
            items: {
                type: Array,
                default: () => [],
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
</style>