<script>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'

export default {
  components: {Nav},
  data() {
    return {
      pets: [
        {id: 1, name: "Mimi", breed: "British Shorthair", age: 2, adopted: true},
        {id: 2, name: "Flint", breed: "Britsh Shorthair", age: 2, adopted: true},
        {id: 3, name: "Aster", breed: "Golden Retriever", age: 5, adopted: true},
        {id: 4, name: "Gilbird", breed: "Canary", age: 6, adopted: false},
        {id: 5, name: "Adora", breed: "Pesquets Parrot", age: 4, adopted: false},
      ],
      searchResult: ''
    }
  },
  methods: {
    handleSearch(name) {
      const pet = this.pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
      if (pet) {
        this.searchResult = 
        this.searchResult = `${pet.name} is ${pet.adopted ? "adopted" : "available"}`;
      }
      else {
        this.searchResult = `No pet found by the name ${name}.`;
      }
    }
  }
}   
</script>

<template>
    <div class="wrapper">
      <Nav @search-pet="handleSearch" />
      <p>{{ searchResult }}</p>
      <router-view :pets="pets" />
    </div>
  
</template>

<style>

</style>
