<!--Export default exports Vue components to other parts of the website,
You can put your data and methods here.

.$emit sends the data from the child component to the parent
(in this case, this.searchName to @search-pet)-->
<script>
export default {
    data() {
        return {
            searchName: ''
        }
    },
    methods: {
        search() {
            this.$emit('search-pet', this.searchName);
        }
    }

}
</script>

<!--
v-model binds the user input value to the data-value.
@click makes the button activate the method "search"
-->
<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/pets">Meet our Pets!</router-link>

        <div>
            <input v-model="searchName" type="text" placeholder="Enter pet name" />
            <button @click="search">Search</button>
        </div>
    </nav>
</template>