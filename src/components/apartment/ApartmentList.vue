<template>
    
        <Container>
            <slot name="title"></slot>
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
        </Container>



    
</template>

<script>
import ApartmentItem from './ApartmentItem.vue'
import Container from '../shared/Container.vue'



    export default {
        name: "ApartmentList",
        components: {
            ApartmentItem,
            Container,
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
.apartment-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
</style>